import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SettingsController extends Controller {
    @tracked test = 'test';

    @service store;
    @service session;

    get account() {
        let id = this.session.data.authenticated.data.relationships.account.data.id;
        console.log(id);
        this.store.findRecord('useraccount', id)
            .then((response) => {
                console.log(response.accountname);
            });
    }
}
