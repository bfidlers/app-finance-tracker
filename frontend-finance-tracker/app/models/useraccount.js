import Model, { attr } from '@ember-data/model';

export default class UseraccountModel extends Model {
  @attr('string') accountname;
  @attr('string') password;
  @attr('string') salt;
  @attr('string') status;
  @attr('date') created;
  @attr('date') modified;
}
