'use client'

import styles from '../page.module.css';

import RecipeViewImage from './RecipeViewImage';
import ExitButton from './ExitButton';
import IngredientsComponent from './IngredientsComponent';

// type aliases
import { ReceipeViewProp } from '../types/types';


export default function RecipeView({ recipeData, mobileRecipeViewActive, setMobileRecipeViewActive }: ReceipeViewProp) {

  return (
    <section className={`${styles.recipe_view} ${styles.shadow4} 
    ${!mobileRecipeViewActive ? styles.recipe_view_hidden : styles.recipe_view_visible}`}>
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
      <section className={styles.recipe_view_main}>
        <RecipeViewImage 
          className={styles.recipe_view_image}
          src={recipeData.thumbnail}
        />
        <p>{recipeData.name}</p>
        <IngredientsComponent
          recipeData={recipeData}
        />
        <p>{recipeData.instructions}</p>
      </section>
    </section>
  );
};