// 'use client'

import styles from '../page.module.css'
import DrinkListCell from './DrinkListCell'
import EmptyDrinkListCell from './EmptyDrinkListCell'

// type alises
import { DrinkListProps, RawDrinkDataProp } from '../types/types'

export default function DrinkList ({ searchData, setRecipeData, setMobileRecipeViewActive, 
  setRecipeActive }: DrinkListProps) {

  let rawDrinkData;
  
  if(searchData) {
    rawDrinkData = searchData.drinks;
  }

  const dataLength = !rawDrinkData ? 0 : rawDrinkData.length;
  
  let addOnLength;
  let addOnArray;

  if(dataLength < 13) {
    addOnLength = 13 - dataLength;
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
