import Controller from '@ember/controller';

export default class StatsController extends Controller {
  input = {
    categories:
      [
        { category: 'label1', amount: 400 },
        { category: 'label2', amount: 800 },
        { category: 'label3', amount: 1200 },
      ]
  }

  data = {
    labels: this.input.categories.map((elem) => elem.category),
    datasets: [
      {
        label: 'My First Dataset',
        data: this.input.categories,
        hoverOffset: 4,
      },
    ],
  };

  options = {
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
