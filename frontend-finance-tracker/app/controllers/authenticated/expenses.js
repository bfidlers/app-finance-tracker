import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ExpensesController extends Controller {
  @tracked name = '';
  @tracked amount = '';
  @tracked date = this.currentdate();
  @tracked description = '';
  @tracked category = 'Miscellaneous';
  @tracked paymentMethod = 'kaart';
  @tracked currency = 'EUR';
  @tracked location = '';

  paymentMethods = [
    "kaart",
    "cash"
  ];

  expenseCategories = [
    "Groceries",
    "Dining Out",
    "Transportation",
    "Utilities",
    "Rent/Mortgage",
    "Healthcare",
    "Entertainment",
    "Clothing",
    "Home Maintenance",
    "Electronics",
    "Education",
    "Insurance",
    "Gifts",
    "Donations",
    "Travel",
    "Childcare",
    "Pet Care",
    "Taxes",
    "Savings",
    "Investments",
    "Fees and Subscriptions",
    "Personal Care",
    "Hobbies",
    "Home Decor",
    "Office Supplies",
    "Automotive",
    "Loans/Debt Repayment",
    "Miscellaneous"
  ]

  @service store;
  @service session;

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

    let id = this.session.data.authenticated.data.relationships.account.data.id;
    this.store
      .findRecord('useraccount', id)
      .then((useraccount) => {
        expense.user = useraccount;
        expense.save();
      });

    // clear the input fields
    this.name = '';
    this.amount = '';
    this.description = '';
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

  @action
  setPaymentMethod(method) {
    this.paymentMethod = method;
  }

  @action
  setExpenseCategory(category) {
    this.category = category;
  }
}
