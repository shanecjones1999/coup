import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBar extends Component {
    @service session;
    @service websocket;

    @tracked modalOpen = false;

    @action
    async invalidateSession() {
        await this.session.invalidate();
    }

    @action
    openRulesModal() {
        this.modalOpen = true;
    }
}
