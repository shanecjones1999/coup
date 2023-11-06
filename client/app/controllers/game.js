import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class GameController extends Controller {
    @service session;
    @service websocket;
    @service router;

    @computed('model.gameState.playerData')
    get player() {
        return this.model.gameState.playerData.find(player => player.id == this.model.playerId);
    }

    @computed('model.gameState.playerData')
    get currentTurnPlayerId() {
        return this.model.gameState.playerData.find(player => player.isTurn)?.id ?? undefined;
    }

    @computed('model.gameState.playerData', 'model.playerId')
    get otherPlayers() {
        return this.model.gameState.playerData.filter(player => player.id != this.model.playerId)
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

    @computed('blockState', 'this.model.playerId')
    get promptBlock() {
        return this.blockState.active && this.blockState.pendingPlayerIds.includes(this.model.playerId);
    }

    @alias('model.gameState.challengeState') challengeState;

    @computed('challengeState', 'this.model.playerId')
    get promptChallenge() {
        return this.challengeState.active && this.challengeState.pendingPlayerIds.includes(this.model.playerId);
    }

    @alias('model.gameState.revealCardState') revealCardState;

    @computed('revealCardState', 'this.model.playerId')
    get promptRevealCard() {
        return this.revealCardState.active && this.revealCardState.revealerId == this.model.playerId;
    }

    @alias('model.gameState.loseInfluenceState') loseInfluenceState;

    @computed('loseInfluenceState', 'this.model.playerId')
    get promptLoseInfluenceState() {
        return this.loseInfluenceState.active && this.loseInfluenceState.playerId == this.model.playerId;
    }

    @tracked selectedPlayerId = '';

    actions = [
                {name: 'Income', id: 1, requiresTarget: false},
                {name: 'Foreign Aid', id: 2, requiresTarget: false}, 
                {name: 'Coup', id: 3, requiresTarget: true}, 
                {name: 'Tax', id: 4, requiresTarget: false},
                {name: 'Assassinate', id: 5, requiresTarget: true}, 
                {name:'Exchange', id: 6, requiresTarget: false}, 
                {name:'Steal', id: 7, requiresTarget: true}
            ];

    init() {
        super.init(...arguments);
        this.websocket.socket.on('leave_game', this.handleLeaveGame.bind(this));
        this.websocket.socket.on('game_state_update', this.handleGameStateUpdate.bind(this));
    }

    handleLeaveGame(id) {
        set(this.model.gameState, 'playerData', this.playerData.filter(player => player.id != id));
    }

    handleGameStateUpdate(gameState) {
        set(this.model, 'gameState', gameState);
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
        }
        this.websocket.socket.emit('block', data);
    }

    @action
    passBlock() {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
        }
        this.websocket.socket.emit('pass_block', data);
    }

    @action
    challenge() {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
        }
        this.websocket.socket.emit('challenge', data);
    }

    @action
    passChallenge() {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
        }
        this.websocket.socket.emit('pass_challenge', data);
    }

    @action
    revealCard(cardId) {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
            cardId: cardId,
        }
        this.websocket.socket.emit('reveal_card', data);
    }

    @action
    loseInfluence(cardId) {
        const playerId = this.player.id;
        const data = {
            gameId: this.model.gameId,
            playerId: playerId,
            cardId: cardId,
        }
        this.websocket.socket.emit('lose_influence', data);
    }

    @action
    initiateAction(action) {
        const sourceId = this.player.id;

        if (action.requiresTarget && !this.selectedPlayerId) {
            return;
        }

        const targetId = action.requiresTarget ? this.selectedPlayerId : undefined

        const data = {
            gameId: this.model.gameId, 
            actionId: action.id,
            sourceId: sourceId,
            targetId: targetId,
        }

        this.selectedPlayerId = '';

        this.websocket.socket.emit('initiate_action', data);
    }

    @action
    loadId(id) {
        this.selectedPlayerId = id;
        console.log(id)
    }
}