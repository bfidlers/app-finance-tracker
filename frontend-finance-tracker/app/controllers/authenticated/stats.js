import Controller from '@ember/controller';

export default class StatsController extends Controller {
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

        // console.log(chart.data.datasets[0].data[index].url)
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
