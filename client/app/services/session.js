import SessionService from 'ember-simple-auth/services/session';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class Session extends SessionService {
  @service websocket;
  @service router;
  
  handleAuthentication() {
    this.router.transitionTo('games');
  }

  // Make this async for websocket.
  async invalidate() {
    const token = this.data.authenticated.token;

    const headers = {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(`${ENV.API_HOST}/api/invalidateSession`, {
      method: 'POST',
      headers: headers,
    });

    super.invalidate();
  }
}
