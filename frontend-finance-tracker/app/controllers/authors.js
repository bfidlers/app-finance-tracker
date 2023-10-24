import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthorsController extends Controller {
    @tracked newAuthor = '';

    @service store;

    @action
    addAuthor(event) {
        event.preventDefault();

        //create the author
        let author = this.store.createRecord('author', {
            name: this.newAuthor,
        });
        author.save();

        // clear the input fields
        this.newAuthor = '';
    }

    @action
    removeAuthor(author, event) {
        event.preventDefault();
        author.destroyRecord();
    }
}
