import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class WebsocketService extends Service {
  socket = null;
  @service session;

  init() {
    super.init(...arguments);
    const token = this.session.data.authenticated.token;
    const socket = window.io.connect(`${ENV.API_HOST}`, {
      query: {
        token: token,
      },
    });
    this.socket = socket;
    // socket.on('open', this.handleOpen.bind(this));
    // socket.on('close', this.handleClose.bind(this));
  }

  // handleOpen() {
  //     console.log('WebSocket connection opened');
  // }

  // handleClose() {
  //     console.log('WebSocket connection closed');
  // }
}
