import ProtectedRoute from './protected-route';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class GameRoute extends ProtectedRoute {
    @service session;
    @service websocket;

    async model(params) {
        const id = params.game_id;
        const token = this.session.data.authenticated.token;

        const headers = {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`${ENV.API_HOST}/api/joinGame`, {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: headers,
        });

        const jsonData = await response.json();

        const data = { token: token, id: id };
        this.websocket.socket.emit('join_game', data);
        return {
            gameState: jsonData.gameState,
            playerId: jsonData.playerId,
            cards: jsonData.cards,
            gameId: id,
            exchangeCards: jsonData.exchangeCards,
        };
    }
}
