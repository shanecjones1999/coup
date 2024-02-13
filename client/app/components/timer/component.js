import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default class Timer extends Component {
    @alias('args.timeLeft') timeLeft;
}
