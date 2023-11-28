import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default class InlineAlert extends Component {
    @computed('args.visible')
    get visible() {
        return this.args.visible;
    }

    @action
    dismissAlert() {
        this.args.onDismiss();
    }
}