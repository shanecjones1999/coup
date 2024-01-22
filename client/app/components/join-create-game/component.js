import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class JoinCreateGame extends Component {
    @alias('args.games')
    get games() {
        return this.args.games;
    }
}