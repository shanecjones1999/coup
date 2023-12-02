import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'client/config/environment';
import { set } from '@ember/object';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class ChallengeState extends Component {
    @computed('args.{exchangeState,playerId}')
    get isSource() {
        return this.args.exchangeState.playerId == this.args.playerId;
    }

    @computed('args.totalExchangeCards')
    get totalExchangeCards() {
        console.log(this.args.totalExchangeCards);
        return this.args.totalExchangeCards.filter(card => !card.revealed);
    }

    @computed('args.selectedCardIds')
    get selectedCards() {
        return this.args.selectedCardIds.length != this.args.exchangeState.expectedExchangeCount;
    }

    @computed('args.selectedCardIds','args.exchangeState')
    get remainingSelectCount() {
        return this.args.exchangeState.expectedExchangeCount - this.args.selectedCardIds.length;
    }
}