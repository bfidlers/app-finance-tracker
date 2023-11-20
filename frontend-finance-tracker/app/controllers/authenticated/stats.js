import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class StatsController extends Controller {
  @service router;

  constructor() {
    super(...arguments);

    this.options = {
      responsive: false,
      parsing: {
        key: 'amount',
      },
      onClick: (e, activeElements, chart) => {
        if (activeElements.length === 0) return;

        let index = activeElements[0].index;

        this.router.transitionTo('authenticated.expenses', {
          queryParams: {
            category: chart.data.datasets[0].data[index].category
          }
        });
      }
    };
  }

  get data() {
    return {
      labels: this.model.categories.map((elem) => elem.category),
      datasets: [
        {
          label: 'Expenses',
          data: this.model.categories,
          hoverOffset: 4,
        },
      ],
    };
  }
}
