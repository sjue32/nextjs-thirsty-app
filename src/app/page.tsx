'use client'

import styles from './page.module.css';
import SearchBar from './components/SearchBar';
import EmptyDrinkList from './components/EmptyDrinkList';
import DrinkList from './components/DrinkList';
import EmptyRecipeView from './components/EmptyRecipeView';
import RecipeView from './components/RecipeView';
import CloseButton from './components/CloseButton';

import { useState } from 'react'

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

export default function Home() {

  const [ searchQuery, setSearchQuery] = useState<string>('');
  const [ recipeActive, setRecipeActive ] = useState<boolean>(false);
  const [ mobileRecipeViewActive, setMobileRecipeViewActive ] = useState<boolean>(false);
  const [ searchData, setSearchData ] = useState<SearchDataProps>({ drink: null });
  const [ recipeData, setRecipeData ] = useState<formattedDataProps>({
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
        <section className={styles.main_container}>
          <div className={styles.top}>
            <p>
              Thirsty
            </p>
            {/* <CloseButton /> */}
          </div>
          <SearchBar 
            className={styles.searchbar}
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            setSearchData={setSearchData}
          />
          { searchQuery === '' ? <EmptyDrinkList /> :       
          <DrinkList 
            searchQuery={searchQuery}
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
