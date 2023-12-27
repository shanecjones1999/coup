import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default class Timer extends Component {
    @computed('args.timeLeft')
    get timeLeft() {
        return this.args.timeLeft;
    }

    @tracked time = this.timeLeft;

    // constructor() {
    //     super(...arguments);
    //     //this.startTimer();
    // }

    // startTimer() {
    //     setInterval(() => {
    //         if (this.timeLeft && this.timeLeft > 0) {
    //             set(this, 'time', this.timeLeft-1);
    //         }
    //     }, 1000);
    // }
}
