'use client'

import { useEffect } from 'react';
import { DrinkListCell } from './DrinkListCell'
import { EmptyDrinkListCell } from './EmptyDrinkListCell'

// import rawDrinkDataParser from '../helperFunctions/rawDrinkDataParser';

import styles from '../page.module.css'
import useSWR from 'swr';

// test data
import { sampleRawDrinkData } from '../sampleData/sampleRawDrinkData'

type DrinkListProps = {
  searchQuery: string;
}

type drinkPreviewDataProp = {
  drinkName: string,
  drinkThumbnail: string,
}

type ErrorObject = {
  message: string;
}

type rawServerDataProp = {
  drinks: unknown[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export default function DrinkList ({ searchQuery }: DrinkListProps) {

  const parsedQuery = searchQuery.split(' ').join('+');
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${parsedQuery}`;

  // let data: Record<string,unknown>;
  // let error: unknown;

  // add error handling ... 
  const { data, error } = useSWR(url, fetcher);
  let rawDrinkData;
  
  if(data) {
    rawDrinkData = data.drinks;
  }

  // call function to parse raw data to pull the name, thumbnail url 
  const formattedDrinkData: Array<drinkPreviewDataProp> = [];
  function parseRawDrinkData(rawData: Array<Record<string, unknown>>) {
    // iterate through data
    for(const drink of rawData) {
      const drinkPreviewData = {
        drinkName: drink.strDrink as string,
        drinkThumbnail: drink.strDrinkThumb as string,
      };

      formattedDrinkData.push(drinkPreviewData);
    }
  }
  if(rawDrinkData) {
    parseRawDrinkData(rawDrinkData);
  }

  const formattedDrinkDataExists = formattedDrinkData.length > 0;
  const dataLength = formattedDrinkData.length;
  
  let addOnLength;
  let addOnArray;

  if(dataLength < 10) {
    addOnLength = 10 - dataLength;
    addOnArray = Array(addOnLength).fill(true);
  }

  // if(rawDrinkData !== null) {
  //     // test out recipeDrinkData function
  //     console.log('rawDrinkData: ', rawDrinkData);
  //     const testDrinkData = rawDrinkData as Record<string, unknown>[];
  //     const singleDrinkRawData = testDrinkData[0];
  //     // console.log('singleRawDrinkData: ', singleDrinkRawData);
  //     const recipeData = rawDrinkDataParser(testDrinkData[0] as Record<string, string | null>);
  //     console.log('testing drink data parser: ', recipeData);
  // }
  // generate list cells based on drink raw data
  // these cells should either be links containing divs, or div's with links

  return (
    <section className={styles.drinkList}>
        {
          formattedDrinkDataExists ? 
          formattedDrinkData.map((drink: drinkPreviewDataProp) => {

            return(<DrinkListCell 
                    key={drink.drinkName}
                    drinkName={drink.drinkName} 
                    drinkThumbnail={drink.drinkThumbnail}
                  />)
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
