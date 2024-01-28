import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'client/config/environment';

export default class IndexRoute extends Route {
  @service session;
  @service router;
  @service store;

  async beforeModel() {
    // try {
    //     const test = await this.store.findAll('player');
    // } catch(e) {
    //     console.log(e);
    // }

    console.log('ENV.API_HOST value:', ENV.API_HOST);

    if (this.session.isAuthenticated) {
        this.router.transitionTo('lobby');
    }
    }
}
