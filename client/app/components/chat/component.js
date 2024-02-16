import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class Chat extends Component {
    @tracked message = '';
    @tracked collapsed = false;

    @action
    submit() {
        if (this.message.length <= 0) {
            return;
        }
        this.args.sendMessage(this.message);
        set(this, 'message', '');
    }

    @action
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
}