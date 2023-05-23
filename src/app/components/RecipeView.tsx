import styles from '../page.module.css';

import RecipeViewImage from './RecipeViewImage';
import IngredientsComponent from './IngredientsComponent';

type DrinkDataProp = {
  recipeData?: formattedDataProps;
}

type formattedDataProps = {
  name: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

// sample data

// sample data from rawDrinkDataParser
const sampleData = {
  name: 'Manhattan',
  ingredients: ["Bourbon (4.5 cl)", "Angostura bitters (2 dashes)", "Sugar (1 cube)", 
    "Water (dash)"],
  colors: ["rgba(131, 105, 83, 1)", "rgba(255, 183, 206, 1)", "rgba(193, 198, 252, 1)", 
    "rgba(193, 198, 252, 1)"],
  measurementValues: [9, 0.25, 0.5],
  chartColors: ["rgba(131, 105, 83, 1)", "rgba(255, 183, 206, 1)", "rgba(193, 198, 252, 1)"],
}

const strInstructions = "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge."



export default function RecipeView({ recipeData }: DrinkDataProp) {

  // top section

  // photo 30 px circle, top pad 30px bottom 20px

  // ingredients component
  // left side: ingredients legend

  // right side: pie chart for ingredients with valid measurements

  // instructions text

  return (
    <section className={styles.recipe_view}>
      <div className={styles.recipe_view_top}>
        <p>{sampleData.name}</p>
      </div>
      <RecipeViewImage 
        className={styles.recipe_view_image}
        src='https://www.thecocktaildb.com/images/media/drink/967t911643844053.jpg/preview'
      />
      <p>{sampleData.name}</p>
      <IngredientsComponent
        className={styles.ingredients_component}
        recipeData={sampleData}
      />
      <p>{strInstructions}</p>
    </section>
  )



};