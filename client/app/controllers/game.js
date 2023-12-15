import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class GameController extends Controller {
     @service websocket;

    init() {
        super.init(...arguments);
        this.websocket.socket.on(
            'game_state_update',
            this.handleGameStateUpdate.bind(this)
        );
        this.websocket.socket.on('message_update', this.handleMessageUpdate.bind(this));
    }

    handleMessageUpdate(message) {
        const newChat = [...this.model.gameState.chatLog, message];
        set(this.model.gameState, 'chatLog', newChat);
    }

    handleGameStateUpdate(gameState) {
        set(this.model, 'gameState', gameState);
    }
}
