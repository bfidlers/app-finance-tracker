import Controller from '@ember/controller';

export default class ExpensesController extends Controller {
  queryParams = [
    'name',
    'currency',
    'category',
    'payment_method',
    'location',

    'price_min',
    'price_max',

    'date_min',
    'date_max',
  ];

  name = null;
  currency = null;
  category = null;
  payment_method = null;
  location = null;

  price_min = null;
  price_max = null;

  date_min = null;
  date_max = null;
}
