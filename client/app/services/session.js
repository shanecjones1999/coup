import SessionService from 'ember-simple-auth/services/session';
import { inject as service } from '@ember/service';

export default class Session extends SessionService {
    @service websocket;

    // Make this async for websocket.
    invalidate() {
        // const token = this.data.authenticated.token;
        // //this.websocket.socket.emit('invalidate_session', token);
        // this.websocket.socket.emit('invalidate_session', token);
        
        super.invalidate();
    }
}