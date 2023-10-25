import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') created;
  @attr('string') modified;
  @attr('string') birthdate;

  @hasMany('useraccount', { async: true, inverse: 'user' }) accounts;
}
