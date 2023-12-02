import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class LoseInfluenceState extends Component {
    @computed('args.{loseInfluenceState,playerId}')
    get isSource() {
        return this.args.loseInfluenceState.playerId == this.args.playerId;
    }
}