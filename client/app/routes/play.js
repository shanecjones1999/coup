import Route from '@ember/routing/route';
import ENV from 'client/config/environment';

export default class PlayRoute extends Route {
    async model() {
        const response = await fetch(`${ENV.API_HOST}/api/get_lobby`);
        const players = await response.json();
        const currentPlayer = await fetch(`${ENV.API_HOST}/api/get_player`);
        const cup = await currentPlayer.json();
        return { players, cup };
    }
}
