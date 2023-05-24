'use client'

import styles from '../page.module.css';

import RecipeViewImage from './RecipeViewImage';
import ExitButton from './ExitButton';
import IngredientsComponent from './IngredientsComponent';

type DrinkDataProp = {
  recipeData: formattedDataProps;
  mobileRecipeViewActive: boolean;
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type formattedDataProps = {
  name: string;
  instructions: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

export default function RecipeView({ recipeData, mobileRecipeViewActive, setMobileRecipeViewActive }: DrinkDataProp) {

  return (
    <section className={`${styles.recipe_view} ${!mobileRecipeViewActive ? styles.recipe_view_hidden : styles.recipe_view_visible}`}>
      <div className={styles.recipe_view_top}>
          <section>
            <ExitButton setMobileRecipeViewActive={setMobileRecipeViewActive}  />
          </section>
          <section>
            <p>{recipeData.name}</p>
          </section>
          <section>
            <div className={styles.empty_div}></div>
          </section>
      </div>
      <RecipeViewImage 
        className={styles.recipe_view_image}
        src='https://www.thecocktaildb.com/images/media/drink/967t911643844053.jpg/preview'
      />
      <p>{recipeData.name}</p>
      <IngredientsComponent
        className={styles.ingredients_component}
        recipeData={recipeData}
      />
      <p>{recipeData.instructions}</p>
    </section>
  );
};