
export type DrinkListProps = {
  searchData: SearchDataProps;
  setRecipeData: React.Dispatch<React.SetStateAction<RecipeDataProps>>;
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ExitButtonProp = {
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export type RawDrinkDataProp = {
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

export type RecipeDataProps = {
  name: string;
  thumbnail: string;
  instructions: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

export type ReceipeViewProp = {
  recipeData: RecipeDataProps;
  mobileRecipeViewActive: boolean;
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SearchBarProps = {
  className: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchData: React.Dispatch<React.SetStateAction<SearchDataProps>>;
}

// returned search data
export type SearchDataProps = Record<string, null | RawDrinkDataProp[]>;