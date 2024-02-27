import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBar extends Component {
    @service session;
    @service router;

    @tracked actionSheetModalOpen = false;

    @action
    openActionSheetModal() {
        this.actionSheetModalOpen = true;
    }

    @tracked rulesModalOpen = false;

    @action
    openRulesModal() {
        this.rulesModalOpen = true;
    }

    @action
    async invalidateSession() {
        await this.session.invalidate();
    }
}
