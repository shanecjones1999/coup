import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class RevealCardState extends Component {
    @computed('args.{revealCardState,playerId}')
    get isRevealingPlayer() {
        return this.args.revealCardState.revealerId == this.args.playerId;
    }
}