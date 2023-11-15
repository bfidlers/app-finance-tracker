import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExpenseRoute extends Route {
  @service store;
  @service session;

  model(params) {
    console.log(params);
    let id = this.session.data.authenticated.data.relationships.account.data.id;

    let options = {
      'filter[user][:id:]': id,
    };

    if (params.category) options['filter[category]'] = params.category;

    return this.store.query('expense', options);
  }
}
