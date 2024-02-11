import Service from '@ember/service';
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

        socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
            this.reconnect();
        });

        socket.on('connect_error', (error) => {
            console.error('WebSocket connection error:', error);
            this.reconnect();
        });

        this.socket = socket;
    }

    reconnect() {
        if (!this.socket || !this.socket.connected) {
            console.log('Attempting to reconnect to WebSocket server...');
            setTimeout(() => {
                this.connect();
            }, 3000); // Adjust the reconnect delay as needed
        }
    }

    willDestroy() {
        if (this.socket) {
            this.socket.disconnect();
        }
        super.willDestroy(...arguments);
    }
}
