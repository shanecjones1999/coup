import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBar extends Component {
    @service session;
    @service websocket;

    async test() {
        console.log('start timer');
        await new Promise(resolve => setTimeout(resolve, 25));
        console.log('after 1 second');
    }

    @action
    async invalidateSession() {
        const token = this.session.data.authenticated.token;
        //this.websocket.socket.emit('invalidate_session', token);
        this.websocket.socket.emit('invalidate_session', token);
        await this.test();
        this.session.invalidate();
    }
}