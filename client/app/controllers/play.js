import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PlayController extends Controller {
  @service websocket;

  @tracked lobby = this.model.players;

  message = '';

  init() {
    super.init(...arguments);
    //super(...arguments);
    //this.websocket.on('lobby_update', (message) => {
    // Update the UI to notify the player about the lobby update
    console.log('init playcontroller');
    this.websocket.socket.on('lobby_update', this.handleLobbyUpdate.bind(this));
    this.websocket.socket.on('leave_lobby', this.handleLeaveLobby.bind(this));
    this.websocket.socket.on('message', this.handleMessage.bind(this));
  }

  handleLobbyUpdate(data) {
    // HACKY TODO:
    if (!this.lobby.includes(data.username)) {
      this.lobby = [...this.lobby, data.username];
    }
  }

  handleLeaveLobby(data) {
    console.log('leaving lobby', data);
    this.lobby = this.lobby.filter((username) => username != data.username);
  }

  async getData() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/getData');

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        // Request failed, handle errors here
        console.error('Erfdsfsdfds');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error getting data:', error);
    }
  }

  @action
  sendMessage() {
    this.websocket.socket.emit('message', this.message);
    this.message = '';
  }

  handleMessage(message) {
    console.log(message);
  }
}
