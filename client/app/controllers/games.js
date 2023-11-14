import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class GamesController extends Controller {
    @service session;
    @service websocket;
    @service router;

    @tracked gameName = '';

    @computed('model.currentLobby')
    get currentLobby() {
        return this.model.currentLobby;
    }

    @computed('model.currentGames')
    get currentGames() {
        return this.model.games;
    }

    init() {
        super.init(...arguments);
        this.websocket.socket.on('lobby_update', this.handleLobbyUpdate.bind(this));
        this.websocket.socket.on('game_start', this.handleGameStart.bind(this));
        this.websocket.socket.on('handle_update_games', this.handleUpdateGames.bind(this));
    }

    // TODO better logic here
    handleLobbyUpdate(updatedLobby) {
        if (this.model) {
            set(this.model, 'currentLobby', updatedLobby);
        }
    }

    handleLeaveLobby(name) {
        console.log(name, 'has leaved!');
        this.lobby = this.lobby.filter(username => username != name);
    }

    handleUpdateGames(updatedGames) {
        set(this.model, 'games', updatedGames);
    }

    handleGameStart(id) {
        const game = this.games.find((g) => g.id == id);
        if (game) {
            set(game, 'isStarted', true);
        }
    }

    @action
    createGame() {
        console.log(this.lobby);
        console.log(this.gameName);
    }

    @action joinGame(id) {
        this.router.transitionTo('game', id);
    }
}