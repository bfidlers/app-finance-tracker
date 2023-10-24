import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BooksController extends Controller {
    @tracked newTitle = '';
    @tracked newIsbn = '';
    @tracked newAuthor = '';

    @service store;

    @action
    async createBook(event) {
        event.preventDefault();

        //create the new book
        let author = this.store.createRecord('author', {
            name: this.newAuthor,
        });
        await author.save();

        //create the new book
        let book = this.store.createRecord('book', {
            title: this.newTitle,
            isbn: this.newIsbn,
            author: author,
        });
        book.save();

        // clear the input fields
        this.newTitle = '';
        this.newIsbn = '';
        this.newAuthor = '';
    }

    @action
    removeBook(book, event) {
        event.preventDefault();
        book.destroyRecord();
    }
}
