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
            'Content-Type': 'application/json',
        };

        const lobbyData = await fetch(`${ENV.API_HOST}/api/enterLobby`,
            {
                headers: headers,
                method: 'GET',
                credentials: 'include',
            }
        );
        const data = await lobbyData.json();
        return { games: data.games, lobby: data.lobby };
    }
}
