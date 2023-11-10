import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsController extends Controller {
  @tracked name = '';

  @service store;

  @action
  addRole(event) {
    event.preventDefault();

    let role = this.store.createRecord('role', {
      rolename: this.name,

    });
    role.save();
  }

  @action
  async removeRole(role, event) {
    event.preventDefault();
    role.destroyRecord();
  }
}
