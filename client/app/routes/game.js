import ProtectedRoute from './protected-route';
import { inject as service } from '@ember/service';

export default class GameRoute extends ProtectedRoute {
    @service session;
    @service websocket;
    
    async model(params) {
        const id = params.game_id;
        const token = this.session.data.authenticated.token;

        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          };

        const response = await fetch('http://127.0.0.1:5000/api/joinGame', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: headers,
        });

        const jsonData = await response.json();

        return { 
            gameState: jsonData.gameState, 
            playerId: jsonData.playerId, 
            gameId: id,
        };
    }

    setupController(controller, model) {
        super.setupController(controller, model);
    
        // After the model has been retrieved, you can set the controller properties

        // TODO CAN WE REMOVE THIS
        const token = this.session.data.authenticated.token;
        controller.playerData = model.gameState.playerData;

        const data = { 'token': token, 'id': model.gameId };
        this.websocket.socket.emit('join_game', data);
    }
}
