import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SettingsController extends Controller {
  @service store;

  @action
  async addRole(account, event) {
    event.preventDefault();

    let roleRecord = this.store.createRecord('role', {
      rolename: document.getElementById(account.accountname).value,
    });
    await roleRecord.save();

    // add role to user account
    let roles = await account.roles;
    roles.push(roleRecord);

    account.save();
  }

  @action
  async removeRole(account, role, event) {
    event.preventDefault();

    let roles = await account.roles;

    account.roles = roles.filter((element) => {
      return element.id !== role.id;
    });

    account.save();
  }
}
