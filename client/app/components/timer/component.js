import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Timer extends Component {
  @tracked time = this.args.timeLeft;

  constructor() {
    super(...arguments);

    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      if (this.time && this.time > 0) {
        this.time -= 1;
      }
    }, 1000);
  }

  @action
  clt() {
    console.log(this.time);
  }
}
