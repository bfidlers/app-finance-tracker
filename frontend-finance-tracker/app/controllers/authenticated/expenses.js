import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

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

  @tracked name = null;
  @tracked currency = null;
  @tracked category = null;
  @tracked payment_method = null;
  @tracked location = null;

  @tracked price_min = null;
  @tracked price_max = null;

  @tracked date_min = null;
  @tracked date_max = null;
}
