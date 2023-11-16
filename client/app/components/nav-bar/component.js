import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBar extends Component {
  @service session;
  @service websocket;

  @action
  async invalidateSession() {
    await this.session.invalidate();
  }
}
