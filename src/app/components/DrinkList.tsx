'use client'

import styles from '../page.module.css'
// import useSWRImmutable from 'swr/immutable';

// import { useEffect, useRef } from 'react';
import { DrinkListCell } from './DrinkListCell'
import { EmptyDrinkListCell } from './EmptyDrinkListCell'

// import { debounce } from 'lodash';

type DrinkListProps = {
  searchQuery: string;
  searchData: SearchDataProps;
  setRecipeData: React.Dispatch<React.SetStateAction<formattedDataProps>>;
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type formattedDataProps = {
  name: string;
  thumbnail: string;
  instructions: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

type SearchDataProps = Record<string, null | RawDrinkDataProp[]>;

type RawDrinkDataProp = {
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

type ErrorObject = {
  message: string;
}

type rawServerDataProp = {
  drinks: unknown[];
}

export default function DrinkList ({ searchQuery, searchData, setRecipeData, setMobileRecipeViewActive, setRecipeActive }: DrinkListProps) {

  let rawDrinkData;
  
  if(searchData) {
    rawDrinkData = searchData.drinks;
  }

  const dataLength = !rawDrinkData ? 0 : rawDrinkData.length;
  
  let addOnLength;
  let addOnArray;

  if(dataLength < 10) {
    addOnLength = 10 - dataLength;
    addOnArray = Array(addOnLength).fill(true);
  }

  // generate list cells based on drink raw data
  // these cells should either be links containing divs, or div's with links

  return (
    <section className={`${styles.drinkList} ${styles.scroller}`}>
      {
        rawDrinkData !== undefined ? 
        rawDrinkData?.map((drink: RawDrinkDataProp, idx: number) => {

          return(
            <DrinkListCell 
              key={drink.strDrink}
              drinkName={drink.strDrink} 
              drinkThumbnail={drink.strDrinkThumb}
              singleRawDrinkData={drink}
              setRecipeData={setRecipeData}
              setMobileRecipeViewActive={setMobileRecipeViewActive}
              setRecipeActive={setRecipeActive}
            />
          )

        }) : null
      }
      {
        // if addOnLength is not undefined, add that amount of emptyDrinkListCells
        addOnArray ? 
          addOnArray.map((elem, idx) => {
            return ( <EmptyDrinkListCell key={`key${idx}`} />)
          })
        : null
      }
    </section>
  );
};
