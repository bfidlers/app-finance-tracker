import Model, { attr } from '@ember-data/model';

export default class ExpenseModel extends Model {
  @attr('string') name;
  @attr('number') amount;
  @attr('string') date;
  @attr('string') description;
  @attr('string') category;
  @attr('string') paymentMethod;
  @attr('string') currency;
  @attr('string') location;
  @attr('string') created;
  @attr('string') modified;
}
