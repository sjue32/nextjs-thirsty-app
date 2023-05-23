import styles from '../page.module.css';

import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartOptions } from 'chart.js/auto';

type PieChartProp = {
  backgroundColor: string[];
  measurementUnitData: number[];
}

const options: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    events: [],
    // animation: false,
};

export default function PieChart({ backgroundColor, measurementUnitData }: PieChartProp) {

  const sampleData = {
    // labels: ['gin', 'tonic', 'Elderflower'],
    datasets: [
      {
        label: 'ingredients',
        backgroundColor: backgroundColor,
        data: measurementUnitData,
        borderWidth: 0,
      },
    ],
  };

  return (
    <section className={styles.pie_chart}>
      <Pie 
        data={sampleData}
        options={options}
        height={100}
        width={100}
      />
    </section>   
  )
};