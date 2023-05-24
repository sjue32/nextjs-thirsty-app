'use client'

import styles from '../page.module.css';
import useDebounce from '../hooks/useDebounce';

type SearchBarProps = {
  className: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchData: React.Dispatch<React.SetStateAction<SearchDataProps>>;
}

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

export default function SearchBar ({className, searchQuery, setSearchQuery, setSearchData } : SearchBarProps) {

  async function fetchRawDrinkData() {
    if(searchQuery === '') return;

    const parsedQuery = searchQuery.split(' ').join('+');
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${parsedQuery}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log('data from fetch: ', data);
    setSearchData(data);
  }

  const debouncedRequest = useDebounce(fetchRawDrinkData);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    searchQuery = value;
    debouncedRequest();
    setSearchQuery(value);
  }

  return (
    <section className={styles.searchbar_container}>
      <input 
        placeholder='Find A Drink' 
        className={className} 
        value={searchQuery}
        onChange={changeHandler} 
        type='search'
      />
    </section>
  );
};
