import Model, { attr } from '@ember-data/model';

export default class ExpenseModel extends Model {
  @attr('string') name;
  @attr('number') amount;
}
