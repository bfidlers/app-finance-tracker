import Controller from '@ember/controller';

export default class ExpensesController extends Controller {
  queryParams = [
    'name',
    'currency',
    'category',
    'payment_method',
    'location',
  ];

  name = null;
  currency = null;
  category = null;
  payment_method = null;
  location = null;
}
