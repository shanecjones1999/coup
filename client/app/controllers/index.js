import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @service router;
    @service websocket;
    @service session;

    init() {
        super.init(...arguments);
    }

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
            
            this.router.transitionTo('lobby');

        } catch (error) {
            console.error('Error adding user to lobby catch:', error);
        }
    }
}
