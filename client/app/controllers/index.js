import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @service router;
    @service websocket;
    @service session;

    @tracked user = {
        username: ''
    };

    @action
    async enterLobby() {
        try {
            const response = await this.session.authenticate(
                'authenticator:custom-token',
                this.user,
            );
            
            this.websocket.socket.emit('lobby_update');
            this.router.transitionTo('lobby');

        } catch (error) {
            console.error('Error adding user to lobby catch:', error);
        }
    }
}
