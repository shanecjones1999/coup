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
        this.websocket.socket.on('set_cards', this.handleSetCards.bind(this));
        this.websocket.socket.on(
            'update_exchange_cards',
            this.handleUpdateExchangeCards.bind(this)
        );
    }

    handleMessageUpdate(message) {
        const newChat = [...this.model.gameState.chatLog, message];
        set(this.model.gameState, 'chatLog', newChat);
    }

    handleGameStateUpdate(gameState) {
        if (!this.timerStarted) {
            this.startTimer();
            this.timerStarted = true;
        }
        set(this.model, 'gameState', gameState);
    }

    handleSetCards(cards) {
        set(this.model, 'cards', cards);
    }

    handleUpdateExchangeCards(cards) {
        set(this.model, 'exchangeCards', cards);
    }

    @tracked timerStarted = false;

    startTimer() {
        setInterval(() => {
            if (this.model.gameState.timeLeft && this.model.gameState.timeLeft > 0) {
                const value = this.model.gameState.timeLeft;
                set(this, 'model.gameState.timeLeft', value-1);
            }
        }, 1000);
    }
}
