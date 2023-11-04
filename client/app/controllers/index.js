import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @service router;
    @service websocket;
    @service session;

    // init() {
    //     super.init(...arguments);
    //     this.websocket.socket.on('join_lobby', this.handleJoinLobby.bind(this));
    // }

    // handleJoinLobby(name) {
    //     console.log(name, 'has joined!');
    // }

    username = '';

    @action
    async enterLobby() {
        try {
            await this.session.authenticate('authenticator:custom-token', this.username);
            const token = this.session.data.authenticated.token;
            this.websocket.socket.emit('join_lobby', token);
            this.router.transitionTo('games');

        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error adding user to lobby catch:', error);
        }
    }

    @action
    async joinGame() {
        this.router.transitionTo('games');
        // const data = {
        //     username: this.username
        // };
    
        // try {
        //     const response = await fetch('http://127.0.0.1:5000/api/join', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        //     });

        //     if (response.ok) {
        //     this.websocket.joinLobby(this.username);
        //     // Request was successful
        //     const responseData = await response.json();
        //     console.log('User added to lobby 62:', responseData);
        //     this.router.transitionTo('play');
            
        //     } else {
        //     // Request failed, handle errors here
        //     console.error('Error adding user to lobby else:', response.statusText);
        //     }
        // } catch (error) {
        //     // Handle network errors or other exceptions
        //     console.error('Error adding user to lobby catch:', error);
        // }
    }
}