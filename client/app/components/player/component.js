import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Player extends Component {
    @action
    getId() {
        if (!this.args.highlight) {
            return;
        }
        this.args.loadId(this.args.playerData.id);
    }
}