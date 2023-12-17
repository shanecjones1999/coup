import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class BlockState extends Component {
    @computed('args.{blockState,playerId}')
    get isTarget() {
        return this.args.blockState.targetId == this.args.playerId || 
        (this.args.blockState.actionId == 2 && this.args.playerId != this.args.blockState.sourceId && this.args.blockState.pendingPlayerIds.includes(this.args.playerId));
    }
}