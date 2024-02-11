import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProtectedRoute extends Route {
  @service session;
  @service router;

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.router.transitionTo('index');
    }
  }
}
