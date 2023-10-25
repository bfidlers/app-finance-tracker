import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ExpensesController extends Controller {
  @tracked name = '';
  @tracked amount = '';
  @tracked date = this.currentdate();
  @tracked description = '';
  @tracked category = '';
  @tracked paymentMethod = '';
  @tracked currency = 'EUR';
  @tracked location = '';

  @service store;

  @action
  async createExpense(event) {
    event.preventDefault();

    //create the new expense
    let expense = this.store.createRecord('expense', {
      name: this.name,
      amount: this.amount,
      date: this.date,
      description: this.description,
      category: this.category,
      paymentMethod: this.paymentMethod,
      currency: this.currency,
      location: this.location,
      created: new Date().toISOString(),
      modified: new Date().toISOString(),
    });
    await expense.save();

    // clear the input fields
    this.newName = '';
    this.newAmount = '';
    this.name = '';
    this.amount = '';
    this.date = '';
    this.description = '';
    this.category = '';
    this.paymentMethod = '';
    this.location = '';
  }

  @action
  removeExpense(expense, event) {
    event.preventDefault();
    expense.destroyRecord();
  }

  currentdate() {
    let date = new Date();
    return date.toISOString().substring(0, 10);
  }
}
