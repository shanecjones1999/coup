import ProtectedRoute from './protected-route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class GamesRoute extends ProtectedRoute {
  @service session;

  async model() {
    const token = this.session.data.authenticated.token;

    const headers = {
      Authorization: `${token}`,
      'Content-Type': 'application/json', // Adjust the content type as needed
    };

    const gamesResponse = await fetch(`${ENV.API_HOST}/api/getGames`, {
      headers: headers,
      method: 'GET',
      credentials: 'include', // Include cookies and authentication
    });
    const games = await gamesResponse.json();

    // Fetch current player data with credentials
    const currentPlayerResponse = await fetch(
      `${ENV.API_HOST}/api/getCurrentUser`,
      {
        headers: headers,
        method: 'GET',
        credentials: 'include', // Include cookies and authentication
      }
    );
    const currentPlayer = await currentPlayerResponse.json();

    // api/getCurrentLobby
    const currentLobbyResponse = await fetch(
      `${ENV.API_HOST}/api/getCurrentLobby`,
      {
        method: 'GET',
        credentials: 'include', // Include cookies and authentication
      }
    );

    const currentLobby = await currentLobbyResponse.json();
    return { games, currentPlayer, currentLobby };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.lobby = model.currentLobby;
  }
}
