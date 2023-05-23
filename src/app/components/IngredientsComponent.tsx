import { Chart } from "react-chartjs-2";
import ChartContainer from "./ChartContainer";

type drinkDataProp = {
  name: string,
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
}

type IngredientsComponentProp = {
  className: string;
  recipeData: drinkDataProp;
}

export default function IngredientsComponent({ className, recipeData } : IngredientsComponentProp) {

  return (
    <section className={className}>
      <p>Ingredients:</p>
      <ChartContainer 
        recipeData={recipeData}
      />


    </section>
  );

}

