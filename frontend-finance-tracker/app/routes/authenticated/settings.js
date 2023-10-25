import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsRoute extends Route {
  @service store;
  @service session;

  model() {
    let id = this.session.data.authenticated.data.relationships.account.data.id;
    return this.store.findRecord('useraccount', id, { include: 'user' });
  }
}
