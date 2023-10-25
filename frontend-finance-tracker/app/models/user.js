import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('date') created;
  @attr('date') modified;

  @hasMany('useraccount', { async: true, inverse: 'user' }) accounts;
}
