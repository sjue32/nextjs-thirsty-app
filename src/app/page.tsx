'use client'

import styles from './page.module.css';
import SearchBar from './components/SearchBar';
import EmptyDrinkList from './components/EmptyDrinkList';
import DrinkList from './components/DrinkList';
import EmptyRecipeView from './components/EmptyRecipeView';
import RecipeView from './components/RecipeView';

import { useState } from 'react'

// type aliases
import { SearchDataProps, RecipeDataProps } from './types/types';

export default function Home() {

  const [ searchQuery, setSearchQuery] = useState<string>('');
  const [ recipeActive, setRecipeActive ] = useState<boolean>(false);
  const [ mobileRecipeViewActive, setMobileRecipeViewActive ] = useState<boolean>(false);
  const [ searchData, setSearchData ] = useState<SearchDataProps>({ drink: null });
  const [ recipeData, setRecipeData ] = useState<RecipeDataProps>({
    name: '',
    thumbnail: '',
    instructions: '',
    ingredients: [],
    colors: [],
    measurementValues: [],
    chartColors: [],
  });

  return (
    <main className={styles.main}>
        <section className={`${styles.main_container} ${styles.shadow4}`}>
          <div className={styles.top}>
            <p>
              Thirsty
            </p>
          </div>
          <SearchBar 
            className={styles.searchbar}
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            setSearchData={setSearchData}
          />
          { searchQuery === '' ? <EmptyDrinkList /> :       
          <DrinkList 
            searchData={searchData}
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
