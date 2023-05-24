'use client'

import styles from './page.module.css';
import { SearchBar } from './components/SearchBar';
import EmptyDrinkList from './components/EmptyDrinkList';
import DrinkList from './components/DrinkList';
import EmptyRecipeView from './components/EmptyRecipeView';
import RecipeView from './components/RecipeView';

import { useState, useEffect } from 'react'

type drinksProp = null | Record<string,unknown>[];

type formattedDataProps = {
  name: string;
  instructions: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

export default function Home() {

  const [ searchQuery, setSearchQuery] = useState<string>('');
  const [ recipeActive, setRecipeActive ] = useState<boolean>(false);
  const [ mobileRecipeViewActive, setMobileRecipeViewActive ] = useState<boolean>(false);
  const [ recipeData, setRecipeData ] = useState<formattedDataProps>({
    name: '',
    instructions: '',
    ingredients: [],
    colors: [],
    measurementValues: [],
    chartColors: [],
  });

  // console.log('inside page.tsx: searchQuery: ', searchQuery);
  console.log('mobileRecipeViewActive: ', mobileRecipeViewActive);

  return (
    <main className={styles.main}>
        <section className={styles.main_container}>
          <div className={styles.top}>
            <p>
              Thirsty
            </p>
          </div>
          <SearchBar 
            className={styles.searchbar}
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
          />
          { searchQuery === '' ? <EmptyDrinkList /> :       
          <DrinkList 
            searchQuery={searchQuery}
            setRecipeData={setRecipeData}
            setMobileRecipeViewActive={setMobileRecipeViewActive}
            setRecipeActive={setRecipeActive}
          /> }
        </section>
        { !recipeActive ? 
          <EmptyRecipeView /> : 
          <RecipeView 
            recipeData={recipeData} 
            mobileRecipeViewActive={mobileRecipeViewActive} 
            setMobileRecipeViewActive={setMobileRecipeViewActive}
          />}
    </main>
  );
};
