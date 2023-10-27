import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExpensesRoute extends Route {
  @service store;
  @service session;

  model() {
    // let id = this.session.data.authenticated.data.relationships.account.data.id;
    // return this.store.findRecord('useraccount', id, { include: 'expenses' });
    return this.store.findAll('expense');
  }
}
