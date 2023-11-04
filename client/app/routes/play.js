import Route from '@ember/routing/route';

export default class PlayRoute extends Route {
    async model() {
        const response = await fetch('http://127.0.0.1:5000/api/get_lobby');
        const players = await response.json();
        const currentPlayer = await fetch('http://127.0.0.1:5000/api/get_player');
        const cup = await currentPlayer.json();
        return { players, cup };
    }
}
