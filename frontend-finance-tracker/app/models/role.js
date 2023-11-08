import Model, { attr, hasMany } from '@ember-data/model';

export default class RoleModel extends Model {
    @attr('string') rolename;

    @hasMany('useraccount', { async: true, inverse: 'roles' }) accounts;
}
