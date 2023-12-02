import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class ChallengeState extends Component {
    @computed('args.{challengeState,playerId}')
    get isSource() {
        return this.args.challengeState.sourceId == this.args.playerId;
    }
}