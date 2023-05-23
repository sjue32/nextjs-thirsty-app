import styles from '../page.module.css';

// iterate through data and generate ingredient rows
// input data: colo, ingredient name

// row: colored square, ingredient text

type LegendProp = {
  ingredients: string[];
  colors: string[];
}

type IngredientRowProp = {
  color: string;
  text: string;
}

function IngredientRow({ color, text }: IngredientRowProp) {


  return (
    <section className={styles.ingredient_row}>
      <div 
        className={styles.legend_color_square} 
        style={{ backgroundColor: color  }} 
      />
      <p>{text}</p>
    </section>
  );
}


export default function Legend({ ingredients, colors }: LegendProp ) {

  // iterate through data array and generate array of IngredientRows

  return(
    <section className={styles.legend}>
      {
        ingredients.map((ingredient, idx) => {
          return(
            <IngredientRow 
              key={`${ingredient}${idx}`}
              color={colors[idx]}
              text={ingredients[idx]}
            />
          )
        })
      }

    </section>
  )
};