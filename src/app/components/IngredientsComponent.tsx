import styles from '../page.module.css';
import ChartContainer from "./ChartContainer";

import { RecipeDataProps } from '../types/types';

export default function IngredientsComponent({ recipeData } : { recipeData: RecipeDataProps}) {

  return (
    <section className={styles.ingredients_component}>
      <p>Ingredients:</p>
      <ChartContainer 
        recipeData={recipeData}
      />
    </section>
  );
}

