import { Bar } from 'react-chartjs-2';

const BarChart = ({ labelValue, data }) => {
  const { labelName, datas } = data;

  const chartData = {
    labels: labelValue,
    datasets: [
      {
        label: labelName,
        data: datas,
        fill: true,
        borderColor: 'blue',
        backgroundColor: 'purple',
        tension: 0.1,
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        grid: {
          display: false,
          borderDash: [5, 5],
        },
      },
    },
    radius: 3,
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
      },
    },
  };

  let delayed = false;

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
