import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';

export default class GameHistory extends Component {
    @tracked collapsed = true;

    @action
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
}