import Controller from '@ember/controller';

export default class ExpensesController extends Controller {
  queryParams = ['category'];

  category = null;
}
