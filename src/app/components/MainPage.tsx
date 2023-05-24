'use client'

import { SearchBar } from './SearchBar';
import styles from '../page.module.css'
import { useState, useEffect } from 'react'
// import DrinkList from './components/DrinkList'

export default function MainPage({ children } : {children : React.ReactNode}) {

  const [ searchQuery, setSearchQuery] = useState<string>('');
  const [ rawDrinkData, setRawDrinkData] = useState<Record<string, unknown>[]>([]);
  // const [ currentDrinkData, setCurrentDrinkData ] = useState({});

  // call to API
  // const dataObject = useFetch(searchQuery);
  // console.log('dataObject.data:', dataObject.data);



  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <p>
          THIRSTY APP
        </p>
      </div>
      <SearchBar 
        className={styles.searchbar}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
      />
      {children}
    </main>
  )
}