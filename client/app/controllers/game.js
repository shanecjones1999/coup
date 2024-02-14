import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class GameController extends Controller {
    @service websocket;

    @alias('model.gameState') gameState;

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

        window.onbeforeunload = function() {
            return '';
        }
    }

    handleMessageUpdate(message) {
        const newChat = [...this.model.chatLog, message];
        set(this.model, 'chatLog', newChat);
    }

    @tracked timerStarted = false;

    handleGameStateUpdate(gameState) {
        if (!this.timerStarted && gameState.started && !gameState.over) {
            this.startTimer();
            this.timerStarted = true;
        } else if (gameState.over) {
            this.cancelTimer();
        }

        set(this.model, 'gameState', gameState);
    }

    cancelTimer() {
        clearInterval(this.timer);
        this.timerStarted = false;
    }

    handleSetCards(cards) {
        set(this.model, 'cards', cards);
    }

    handleUpdateExchangeCards(cards) {
        set(this.model, 'exchangeCards', cards);
    }

    timer = undefined;

    startTimer() {
        this.timer = setInterval(() => {
            if (this.gameState.timeLeft && this.gameState.timeLeft > 0) {
                const value = this.gameState.timeLeft;
                set(this.model.gameState, 'timeLeft', value - 1);
            }
        }, 1000);
    }
}
