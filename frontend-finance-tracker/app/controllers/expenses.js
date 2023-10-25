import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ExpensesController extends Controller {
  @tracked newName = '';
  @tracked newAmount = '';

  @service store;

  @action
  createExpense(event) {
    event.preventDefault();

    //create the new expense
    let expense = this.store.createRecord('expense', {
      name: this.newName,
      amount: this.newAmount,
    });
    expense.save();

    // clear the input fields
    this.newName = '';
    this.newAmount = '';
  }

  @action
  removeExpense(expense, event) {
    event.preventDefault();
    expense.destroyRecord();
  }
}
