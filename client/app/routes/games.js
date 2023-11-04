import ProtectedRoute from './protected-route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class GamesRoute extends ProtectedRoute {
    @service session;

    async model() {
        const token = this.session.data.authenticated.token;

        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json', // Adjust the content type as needed
          };

        const gamesResponse = await fetch('http://127.0.0.1:5000/api/getGames', {
            headers: headers,
            method: 'GET',
            credentials: 'include', // Include cookies and authentication
        });
        const games = await gamesResponse.json();

        // Fetch current player data with credentials
        const currentPlayerResponse = await fetch('http://127.0.0.1:5000/api/getCurrentUser', {
            headers: headers,
            method: 'GET',
            credentials: 'include', // Include cookies and authentication
        });
        const currentPlayer = await currentPlayerResponse.json();

        // api/getCurrentLobby
        const currentLobbyResponse = await fetch('http://127.0.0.1:5000/api/getCurrentLobby', {
            method: 'GET',
            credentials: 'include', // Include cookies and authentication
        });

        const currentLobby = await currentLobbyResponse.json();
        return { games, currentPlayer, currentLobby };
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.lobby = model.currentLobby;
      }
}