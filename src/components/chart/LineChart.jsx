import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chart.js'
// import 'chart.js/dist/chart';
import { LinearScale, CategoryScale } from 'chart.js';
LinearScale.id = 'linear';
CategoryScale.id = 'category';


const LineChart = ({ labelValue, data }) => {
  const { labelName, datas } = data;

  const chartData = {
    labels: labelValue,
    datasets: [
      {
        label: labelName,
        data: datas,
        fill: false,
        borderColor: 'rgb(0,95,187)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        grid: {
          display: true,
          color: 'rgb(0,95,187, 0.07)',
          borderDash: [5, 5],
        },
      },
    },
    radius: 2,
    hitRadius: 30,
    hoverRadius: 10,
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delay) {
          delay = context.dataIndex * 20 + context.datasetIndex * 100;
        }
        return delay;
      }
    }
  };

  let delayed = false;

  const dataObj = {
    labels: labelValue,
    datasets: [
      {
        label: data.labelName,
        data: data.datas,
        fill: false,
        borderColor: 'rgb(40, 175, 237)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;