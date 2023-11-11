import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service session;
  @service router;

  beforeModel(transition) {
    if (!this.session.data.authenticated.data.attributes.roles.includes("admin")) {
      this.router.transitionTo('permission-denied');
    }
  }
}
