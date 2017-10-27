/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import { Bar } from 'react-chartjs-2';

/*
 * Component
 */
class Paris extends React.Component {
  state = {
    response: {},
    chartData: [],
    loaded: false,
    chartHour: [],
  }

  componentWillMount() {
    fetch('http://localhost:3000/paris')
      .then(result => result.json())
      .then((response) => {
        const { list } = response;
        const chartData = list.map(item => item.main.temp);
        const chartHour = list.map(item => item.dt_txt.slice(11, 19));
        const loaded = true;
        this.setState({ response, loaded, chartData, chartHour });
      });
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return null;
    }
    const { response, chartData, chartHour } = this.state;
    console.log(chartData);
    const responseDisplayed = response.list;
    const data = {
      labels: chartHour,
      datasets: [
        {
          label: 'Température',
          backgroundColor: 'rgb(255, 99, 132)',
          fill: false,
          pointHoverRadius: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: chartData,
          spanGaps: false,
        },
      ],
    };
    return (
      <div id="paris">
        <p className="city">Paris</p>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            title: {
            display: true,
            text: 'Prévision température par heure / 5 prochains jours',
            },
            legend: { display: false },
          }}
        />
        {
        responseDisplayed.map(obj => (
          <div key={obj.dt}>
            <p>Heure : {obj.dt_txt.slice(11, 19)}</p>
            <p>Température : {obj.main.temp}</p>
            <p>Météo : {obj.weather[0].description}</p>
            <br />
          </div>
        ))
        }
      </div>
    );
  }
}


/*
 * Export default
 */
export default Paris;
