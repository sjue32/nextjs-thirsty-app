import styles from '../page.module.css';

import Legend from "./Legend";
import PieChart from "./PieChart";

import { RecipeDataProps } from '../types/types';

export default function ChartContainer({ recipeData }: { recipeData: RecipeDataProps }) {

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