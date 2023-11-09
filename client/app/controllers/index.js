import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @service router;
    @service websocket;
    @service session;

    username = '';

    @action
    async enterLobby() {
        try {
            await this.session.authenticate('authenticator:custom-token', this.username);
            const token = this.session.data.authenticated.token;
            this.websocket.socket.emit('lobby_update');
            this.router.transitionTo('games');

        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error adding user to lobby catch:', error);
        }
    }
}