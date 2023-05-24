
import Image from "next/image";
import styles from '../page.module.css'

import rawDrinkDataParser from "../helperFunctions/rawDrinkDataParser";

type formattedDataProps = {
  name: string;
  instructions: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

type DrinkListCellProp = {
  drinkThumbnail: string;
  drinkName: string;
  setRecipeData: React.Dispatch<React.SetStateAction<formattedDataProps>>;
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeActive: React.Dispatch<React.SetStateAction<boolean>>;
  singleRawDrinkData: Record<string, unknown>;
}

type RawDrinkDataProp = 
  {
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
  }

const DrinkListCellLeft = (props: { thumbnailSmall: string, drinkName: string}) => {

  const { thumbnailSmall, drinkName } = props;

  return ( 
    <div className={styles.drinkListCellLeft}>
      <Image 
        src={thumbnailSmall}
        className={styles.drinkThumbnail}
        alt=''
        width={65}
        height={60} 
      />
      <p>
        {drinkName}
      </p>
    </div>
    
  );
};

const DrinkListCell = ({ drinkName, drinkThumbnail, singleRawDrinkData, 
  setRecipeData, setMobileRecipeViewActive, setRecipeActive }: DrinkListCellProp) => {
  
  const thumbnailSmall = drinkThumbnail + '/preview';

  function handleClick() {

    // parse raw data for drink
    const recipeData = rawDrinkDataParser(singleRawDrinkData as RawDrinkDataProp);
    console.log('parsed single recipe data: ', recipeData);
    // setRecipeData using parsed data
    setRecipeData(recipeData);
    setRecipeActive(true);
    setMobileRecipeViewActive(true);
  }

  return (
    <button 
      className={styles.drinkCellOuter}
      onClick={handleClick}
    >
      <DrinkListCellLeft thumbnailSmall={thumbnailSmall} drinkName={drinkName} />
      <h2>{'>'}</h2>
    </button>
  );
};

export { DrinkListCell };