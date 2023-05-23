'use client'

import styles from './page.module.css';
import { SearchBar } from './components/SearchBar';
import EmptyDrinkList from './components/EmptyDrinkList';
import DrinkList from './components/DrinkList';
import RecipeView from './components/RecipeView';

// import useSWR from 'swr';

import { useState, useEffect } from 'react'

type drinksProp = null | Record<string,unknown>[];

export default function Home() {

  const [ searchQuery, setSearchQuery] = useState<string>('');
  // const [ rawDrinkData, setRawDrinkData] = useState<Record<string, unknown>[]>([]);
  const [ currentDrinkData, setCurrentDrinkData ] = useState({});

  console.log('inside page.tsx: searchQuery: ', searchQuery);

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <p>
          THIRSTY
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
      /> }
      {/* <RecipeView /> */}

    </main>
  )
}
