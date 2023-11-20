import Controller from '@ember/controller';

export default class StatsController extends Controller {
  data = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          {
            url: 'test1',
            amount: { usd: 300, eur: 200 },
          },
          {
            url: 'test2',
            amount: { usd: 300, eur: 200 },
          },
        ],
        hoverOffset: 4,
      },
    ],
  };

  options = {
    parsing: {
      key: 'amount.usd',
    },
    onClick: (e, activeElements, chart) => {
      if (activeElements.length === 0) return;

      let index = activeElements[0].index;

      console.log(chart.data.datasets[0].data[index].url)
    }
  };
}
