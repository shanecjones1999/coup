import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class GamesController extends Controller {
    @service session;
    @service websocket;
    @service router;

    @tracked gameName = '';
    @tracked lobby = this.model?.currentLobby ?? [];
    @tracked games = [...this.model?.games];

    init() {
        super.init(...arguments);
        this.websocket.socket.on('join_lobby', this.handleJoinLobby.bind(this));
        this.websocket.socket.on('leave_lobby', this.handleLeaveLobby.bind(this));
        this.websocket.socket.on('game_start', this.handleGameStart.bind(this));
    }

    handleJoinLobby(name) {
        this.lobby = [...this.lobby, name]
    }

    handleLeaveLobby(name) {
        console.log(name, 'has leaved!');
        this.lobby = this.lobby.filter(username => username != name);
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