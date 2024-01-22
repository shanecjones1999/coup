import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';

export default class CreateGame extends Component {
    @service session;
    @service websocket;
    @service router;

    maxPlayers = 6;
    minPlayers = 2;

    maxTurnLength = 60;
    minTurnLength = 15;
    turnLengthStep = 5;

    @tracked enableTimer = true;

    @tracked turnLength = 30;

    @tracked numPlayers = 4;
    @tracked gameName = '';

    @tracked showAlert = false;
    @tracked alertMessage = '';

    @action
    async submit() {
        const token = this.session.data.authenticated.token;

        const headers = {
        Authorization: `${token}`,
        'Content-Type': 'application/json', // Adjust the content type as needed
        };

        const response = await fetch(`${ENV.API_HOST}/api/createGame`, {
            headers: headers,
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ 
                'name': this.gameName, 
                'numPlayers': this.numPlayers,
                'enableTurnTimer': this.enableTimer,
                'turnLength': this.turnLength, 
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            this.alertMessage = data;
            set(this, 'showAlert', true)
        }
        else {
            this.router.transitionTo('game', data);
        }
        



        // Send request to create the game
        // Get the game Id back in the request
        // Transition to the game route

        // If request is bad, raise the error
    }

    @action
    handleNumPlayersChange(event) {
        this.numPlayers = event.target.value;
    }

    @action
    handleTurnLengthChange(event) {
        this.turnLength = event.target.value;
    }

    @action
    onDismiss() {
        this.showAlert = false;
    }

    @action
    onShow() {
        console.log('show')
    }
}
