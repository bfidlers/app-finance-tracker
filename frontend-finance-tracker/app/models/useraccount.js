import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UseraccountModel extends Model {
  @attr('string') accountname;
  @attr('string') password;
  @attr('string') salt;
  @attr('string') status;
  @attr('string') created;
  @attr('string') modified;
  @attr('string') email;

  @belongsTo('user', { async: true, inverse: 'accounts' }) user;
  @hasMany('expense', { async: true, inverse: 'user' }) expenses;

  @hasMany('role', { async: true, inverse: 'accounts' }) roles;
}
