import ProtectedRoute from './protected-route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class LobbyRoute extends ProtectedRoute {
    @service session;
    @service router;

    async beforeModel() {
        // Check if the user is in a game
        const token = this.session.data.authenticated.token;
        const headers = {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
        };
        
        const response = await fetch(`${ENV.API_HOST}/api/loadPlayerGame`,
            {
                headers: headers,
                method: 'GET',
                credentials: 'include',
            }
        );

        const data = await response.json();
        if (data.inGame) {
            this.router.transitionTo('game', data.gameId);
        }
    }

    async model() {
        const token = this.session.data.authenticated.token;
        const headers = {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`${ENV.API_HOST}/api/enterLobby`,
            {
                headers: headers,
                method: 'GET',
                credentials: 'include',
            }
        );

        if (!response.ok) {
            await this.session.invalidate();
            return;
        }

        const data = await response.json();
        return { 
            games: data.games, 
            lobby: data.lobby 
        };
    }

    async setupController(controller) {
        super.setupController(...arguments);
        
        // Call the method to make the API request here.
        controller.refreshModel();
    }
}
