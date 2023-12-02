import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';

export default class Player extends Component {
    @action
    selectPlayer() {
        if (!this.selectable || this.args.playerData.lost) {
            console.log('You cannot select this player');
            return;
        }
        this.args.selectPlayerId(this.args.playerData.id);
    }

    @computed('args.canSelectPlayer')
    get selectable() {
        return this.args.canSelectPlayer;
    }

}
