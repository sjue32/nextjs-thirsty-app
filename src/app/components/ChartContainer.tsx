import Legend from "./Legend";
import PieChart from "./PieChart";

import styles from '../page.module.css';

type drinkDataProp = {
  name: string,
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
}

type ChartContainerProp = {
  recipeData: drinkDataProp;
}

export default function ChartContainer({ recipeData }: ChartContainerProp) {

  return(
    <section className={styles.chart_container}>
      <Legend 
        ingredients={recipeData.ingredients}
        colors={recipeData.colors}
      />
      <PieChart 
        backgroundColor={recipeData.chartColors}
        measurementUnitData={recipeData.measurementValues}
      />
    </section>
  );
};