
import Image from "next/image";
import styles from '../page.module.css'

import rawDrinkDataParser from "../helperFunctions/rawDrinkDataParser";

// type aliases
import { RawDrinkDataProp , RecipeDataProps } from "../types/types";

type DrinkListCellProp = {
  drinkThumbnail: string;
  drinkName: string;
  setRecipeData: React.Dispatch<React.SetStateAction<RecipeDataProps>>;
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeActive: React.Dispatch<React.SetStateAction<boolean>>;
  singleRawDrinkData: Record<string, unknown>;
}

function DrinkListCellLeft (props: { thumbnailSmall: string, drinkName: string}) {

  const { thumbnailSmall, drinkName } = props;

  return ( 
    <div className={styles.drinkListCellLeft}>
      <Image 
        src={thumbnailSmall}
        className={styles.drinkThumbnail}
        alt=''
        width={60}
        height={60} 
      />
      <p>
        {drinkName}
      </p>
    </div>
  );
};

export default function DrinkListCell ({ drinkName, drinkThumbnail, singleRawDrinkData, 
  setRecipeData, setMobileRecipeViewActive, setRecipeActive }: DrinkListCellProp) {
  
  const thumbnailSmall = drinkThumbnail + '/preview';

  function handleClick() {

    // parse raw data for drink
    const recipeData = rawDrinkDataParser(singleRawDrinkData as RawDrinkDataProp);
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