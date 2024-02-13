import ProtectedRoute from './protected-route';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class GameRoute extends ProtectedRoute {
    @service session;
    @service websocket;
    @service router;

    async model(params) {
        try {
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

            if (!response.ok) {
                this.router.transitionTo('lobby');
            }

            const jsonData = await response.json();

            const data = { token: token, id: id };
            this.websocket.socket.emit('join_game', data);
            return {
                chatLog: jsonData.chatLog,
                gameState: jsonData.gameState,
                playerId: jsonData.playerId,
                cards: jsonData.cards,
                gameId: id,
                exchangeCards: jsonData.exchangeCards,
            };
        } catch (error) {
            console.log(error);
        }
    }

    setupController(controller, model) {
        super.setupController(...arguments);
        
        if (model.gameState.started && model.gameState.timerEnabled && !model.gameState.over) {
            controller.timerStarted = true;
            controller.startTimer();
        }
    }
}
