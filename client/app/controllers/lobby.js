import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { computed } from '@ember/object';
import { run, later, cancel } from '@ember/runloop';
import { alias } from '@ember/object/computed';
import ENV from 'client/config/environment';

export default class LobbyController extends Controller {
    @service session;
    @service router;

    refreshFrequency = 5000;

    @alias('model.lobby') lobby;

    @alias('model.games') games;

    refreshModel() {
        const intervalId = later(this, function() {
            this.fetchModel();
            this.refreshModel();
        }, this.refreshFrequency);
        
        this.intervalId = intervalId;
    }
    
    stopModelRefresh() {
        cancel(this.intervalId);
    }

    @action
    async fetchModel() {
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

        const data = await response.json();
        set(this.model, 'lobby', data.lobby);
        set(this.model, 'games', data.games);
    }

    @action enterGame(id) {
        this.stopModelRefresh();
        this.router.transitionTo('game', id);
    }

    willTransition() {
        this.stopModelRefresh();
    }

    willDestroy() {
        this.stopModelRefresh();
    }
}
