import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsController extends Controller {
    @tracked accountname = '';
    @tracked email = '';
    @tracked name = '';
    @tracked birthdate = this.model.user.get('birthdate');

    @service store;

    @action
    async saveChanges(event) {
        event.preventDefault();

        if (this.accountChanged()) {
            // update user account
            this.store.findRecord('useraccount', this.model.id)
                .then((useraccount) => {
                    useraccount.accountname = this.accountname;
                    useraccount.email = this.email;
                    useraccount.modified = new Date().toISOString();

                    useraccount.save();
                });
        }

        if (this.userChanged()) {
            // update user
            this.store.findRecord('user', this.model.user.get('id'))
                .then((user) => {
                    user.name = this.name;
                    user.modified = new Date().toISOString();
                    user.birthdate = this.birthdate;

                    user.save();
                });
        }
    }

    userChanged() {
        return (this.name != this.model.user.get('name') &&
            this.name != "") ||
            (this.birthdate != this.model.user.get('birthdate') &&
                this.birthdate != "");


    }

    accountChanged() {
        return (this.accountname != this.model.accountname &&
            this.accountname != "") ||
            (this.email != this.model.email &&
                this.email != "");
    }
}
