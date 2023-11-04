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

    @computed('model.gameState.isStarted')
    get isStarted() {
        return this.model.gameState.isStarted;
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

    actions = [
                {name: 'Income', id: 1, isChallengeable: false, isBlockable: false},
                {name: 'Foreign Aid', id: 2, isChallengeable: false, isBlockable: true}, 
                {name: 'Coup', id: 3, isChallengeable: false, isBlockable: false}, 
                {name: 'Tax', id: 4, isChallengeable: true, isBlockable: false},
                {name: 'Assassinate', id: 5, isChallengeable: true, isBlockable: true}, 
                {name:'Exchange', id: 6, isChallengeable: true, isBlockable: false}, 
                {name:'Steal', id: 7, isChallengeable: true, isBlockable: true}
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
    pass() {
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
    initiateAction(actionId) {
        const sourceId = this.player.id;
        const data = {
            gameId: this.model.gameId, 
            actionId: actionId,
            sourceId: sourceId,
            targetId: undefined,
        }

        this.websocket.socket.emit('initiate_action', data);
    }

    @action
    loadId(id) {
        console.log(id)
    }
}