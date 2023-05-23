'use client'

import styles from '../page.module.css'

type SearchBarProps = {
  className: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({className, searchQuery, setSearchQuery } : SearchBarProps) => {

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    console.log('value: ', value);
    setSearchQuery(value);

  }

  return (
    <section className={styles.searchbar_container}>
      <input 
        placeholder='Find A Drink' 
        className={className} 
        value={searchQuery}
        onChange={changeHandler} 
      />
    </section>
  );
};

export { SearchBar };