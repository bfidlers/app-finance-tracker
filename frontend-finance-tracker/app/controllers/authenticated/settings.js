import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsController extends Controller {
    @tracked accountname = '';
    @tracked email = '';
    @tracked name = '';
    @tracked birthdate = '';

    @service store;

    @action
    async saveChanges(event) {
        event.preventDefault();

        // update user account
        let record1 = this.store.findRecord('useraccount', this.model.id)
            .then((useraccount) => {
                useraccount.accountname = this.accountname;
                useraccount.email = this.email;
                useraccount.modified = new Date().toISOString();

                useraccount.save();
            });

        // update user
        let record2 = this.store.findRecord('user', this.model.user.get('id'))
            .then((user) => {
                user.name = this.name;
                user.modified = new Date().toISOString();
                user.birthdate = this.birthdate;

                user.save();
            });

        await record1;
        await record2;

        // clear the input fields
        this.accountname = '';
        this.email = '';
        this.name = '';
        this.birthdate = '';
    }
}
