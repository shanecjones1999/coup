import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class Game extends Component {
    @service session;
    @service websocket;
    @service router;

    @tracked selectedCardIds = [];

    @alias('args.model') model;

    @computed('model.gameState.playerData', 'model.playerId')
    get player() {
        return this.model.gameState.playerData.find(
            (player) => player.id == this.model.playerId
        );
    }

    @computed('model.cards')
    get cards() {
        return this.model.cards;
    }

    @computed('model.exchangeCards')
    get exchangeCards() {
        return this.model.exchangeCards;
    }

    @computed('exchangeCards','cards','selectedCardIds')
    get totalExchangeCards() {
        const exchangeCards = [...this.cards, ...this.exchangeCards];
        for (let i = 0; i < exchangeCards.length; i++) {
            const isSelected = this.selectedCardIds.includes(exchangeCards[i].id);
            set(exchangeCards[i], 'isSelected', isSelected);
        }
        
        return exchangeCards;
    }

    @computed('model.gameState.playerData')
    get currentTurnPlayerId() {
        return (
            this.model.gameState.playerData.find((player) => player.isTurn)?.id ??
            undefined
        );
    }

  @computed('model.gameState.playerData', 'model.playerId')
  get otherPlayers() {
    return this.model.gameState.playerData.filter(
      (player) => player.id != this.model.playerId
    );
  }

    @computed('model.gameState.started')
    get started() {
        return this.model.gameState.started;
    }

    @computed('model.gameState.over')
    get over() {
        return this.model.gameState.over;
    }

    @alias('model.gameState.blockState') blockState;

    @computed('blockState.active')
    get promptBlock() {
        return this.blockState.active;
    }

    @alias('model.gameState.challengeState') challengeState;

    @computed('challengeState.active')
    get promptChallenge() {
        return this.challengeState.active;
    }

    @alias('model.gameState.revealCardState') revealCardState;

    @computed('revealCardState.active')
    get promptRevealCard() {
        return this.revealCardState.active;
    }

    @alias('model.gameState.loseInfluenceState') loseInfluenceState;

    @computed('loseInfluenceState.active')
    get promptLoseInfluenceState() {
        return this.loseInfluenceState.active;
    }

    @alias('model.gameState.exchangeState') exchangeState;

    @computed('blockState', 'revealCardState', 'loseInfluenceState', 'exchangeState', 'challengeState')
    get inActiveState() {
        return this.blockState.active || this.challengeState.active || this.revealCardState.active || this.loseInfluenceState.active || this.exchangeState.active;
    }

    @computed('exchangeState.active')
    get promptExchangeState() {
        return this.exchangeState.active;
    }

    @alias('model.gameState.chatLog') chatLog;

    @alias('model.gameState.gameLogs') gameHistory;

    @tracked selectedPlayerId = undefined;

    actions = [
        { name: 'Income', id: 1, cost: 0, requiresTarget: false },
        { name: 'Foreign Aid', id: 2, cost: 0, requiresTarget: false },
        { name: 'Coup', id: 3, cost: 7, requiresTarget: true },
        { name: 'Tax', id: 4, cost: 0, requiresTarget: false },
        { name: 'Assassinate', id: 5, cost: 3, requiresTarget: true },
        { name: 'Exchange', id: 6, cost: 0, requiresTarget: false },
        { name: 'Steal', id: 7, cost: 0, requiresTarget: true },
    ];

    init() {
        super.init(...arguments);
        this.websocket.socket.on('leave_game', this.handleLeaveGame.bind(this));
        this.websocket.socket.on(
            'game_state_update',
            this.handleGameStateUpdate.bind(this)
        );
        this.websocket.socket.on('set_cards', this.handleSetCards.bind(this));
        this.websocket.socket.on(
            'update_exchange_cards',
            this.handleUpdateExchangeCards.bind(this)
        );
        this.websocket.socket.on('message_update', this.handleMessageUpdate.bind(this));
    }

    handleMessageUpdate(message) {
        const newChat = [...this.model.gameState.chatLog, message];
        set(this.model.gameState, 'chatLog', newChat);
    }

    handleLeaveGame(id) {
        set(
        this.model.gameState,
        'playerData',
        this.playerData.filter((player) => player.id != id)
        );
    }

    handleGameStateUpdate(gameState) {
        set(this.model, 'gameState', gameState);
    }

    handleSetCards(cards) {
        set(this.model, 'cards', cards);
    }

    handleUpdateExchangeCards(cards) {
        set(this.model, 'exchangeCards', cards);
    }

    @action
    startGame() {
        this.websocket.socket.emit('start_game', this.model.gameId);
    }

    @action
    block(blockCardId) {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
            blockCardId: blockCardId,
        };
        this.websocket.socket.emit('block', data);
    }

    @action
    passBlock() {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
        };
        this.websocket.socket.emit('pass_block', data);
    }

    @action
    challenge() {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
        };
        this.websocket.socket.emit('challenge', data);
    }

    @action
    passChallenge() {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
        };
        this.websocket.socket.emit('pass_challenge', data);
    }

    @action
    revealCard(cardId) {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
            cardId: cardId,
        };
        this.websocket.socket.emit('reveal_card', data);
    }

    @action
    loseInfluence(cardId) {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
            cardId: cardId,
        };
        this.websocket.socket.emit('lose_influence', data);
    }

    @action
    sendMessage(message) {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
            message: message
        };
        this.websocket.socket.emit('message', data);
    }

    @tracked canSelectPlayer = false;
    @tracked selectedAction = undefined;

    @action
    initiateAction(action) {
        const sourceId = this.player.id;

        if (action.requiresTarget && !this.selectedPlayerId) {
            this.canSelectPlayer = true;
            this.selectedAction = action;
            return;
        }

        const targetId = action.requiresTarget ? this.selectedPlayerId : undefined;

        const data = {
            gameId: this.model.gameId,
            actionId: action.id,
            sourceId: sourceId,
            targetId: targetId,
        };

        this.selectedPlayerId = undefined;
        this.selectedAction = undefined;
        this.canSelectPlayer = false;

        this.websocket.socket.emit('initiate_action', data);
    }

    @action
    selectCardToExchange(card) {
        const exchangeCount = this.exchangeState.expectedExchangeCount;

        // If we already selected the card, do not add it.
        if (this.selectedCardIds.find(c => c == card.id)) {
            return;
        }

        this.selectedCardIds.push(card.id);

        if (this.selectedCardIds.length > exchangeCount) {
            this.selectedCardIds.shift();
        }

        set(this, 'selectedCardIds', this.selectedCardIds);
    }

    @action
    confirmExchange() {
        const data = {
            gameId: this.model.gameId,
            playerId: this.player.id,
            selectedCardIds: this.selectedCardIds,
        };
        this.websocket.socket.emit('resolve_exchange_state', data);
        this.selectedCardIds = [];
    }

    @action
    selectPlayerId(id) {
        this.selectedPlayerId = id;
        this.initiateAction(this.selectedAction);
    }

    @action
    leaveGame() {
        this.router.transitionTo('games');
    }
}