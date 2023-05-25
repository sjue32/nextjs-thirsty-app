'use client'

import styles from '../page.module.css';
import useDebounce from '../hooks/useDebounce';
import Image from 'next/image';
import searchIcon from '../images/icons8-search.svg';

// type aliases
import { SearchBarProps,SearchDataProps } from '../types/types';

export default function SearchBar ({className, searchQuery, setSearchQuery, setSearchData } : SearchBarProps) {

  async function fetchRawDrinkData() {
    if(searchQuery === '') return;

    const parsedQuery = searchQuery.split(' ').join('+');
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${parsedQuery}`;

    const res = await fetch(url);
    const data = await res.json();
    setSearchData(data);
  }

  const debouncedRequest = useDebounce(fetchRawDrinkData);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    searchQuery = value;
    debouncedRequest();
    setSearchQuery(value);
  }

  function handleClearButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSearchQuery('');
  };

  return (
    <form className={styles.searchbar_container}>
      <div className={styles.search_icon}>
        <Image
          src={searchIcon}
          alt=''
          height={20}
          width={20}
        />
       </div>
      <input 
        type='text'
        placeholder='Find A Drink' 
        className={className} 
        value={searchQuery}
        onChange={handleChange} 
      />
      <button 
        className={styles.clear_button}
        aria-label='Clear input'
        onClick={handleClearButtonClick}
      >
        X
      </button>
    </form>
  );
};
