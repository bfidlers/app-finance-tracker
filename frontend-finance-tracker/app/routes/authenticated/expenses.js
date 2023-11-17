import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExpenseRoute extends Route {
  @service store;
  @service session;

  model(params) {
    let id = this.session.data.authenticated.data.relationships.account.data.id;

    let options = {
      'filter[user][:id:]': id,
    };

    if (params.name) options['filter[name]'] = params.name;
    if (params.currency) options['filter[currency]'] = params.currency;
    if (params.category) options['filter[category]'] = params.category;
    if (params.payment_method) options['filter[payment-method]'] = params.payment_method;
    if (params.location) options['filter[location]'] = params.location;

    if (params.price_min) options['filter[:gte:amount]'] = params.price_min;
    if (params.price_max) options['filter[:lte:amount]'] = params.price_max;

    if (params.date_min) options['filter[:gte:date]'] = params.date_min;
    if (params.date_max) options['filter[:lte:date]'] = params.date_max;

    return this.store.query('expense', options);
  }
}
