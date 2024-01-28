import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default class EnterGame extends Component {
    @service router;

    // @action joinGame(id) {
    //     this.router.transitionTo('game', id);
    // }
}