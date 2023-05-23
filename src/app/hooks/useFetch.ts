import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetch = (query: string) => {
  // const[isLoading, setIsloading] = useState<boolean>(false);
  // const[isError, setIsError] = useState<boolean>(false);
  // const[data, setData] = useState<Array<Record<string, unknown>>>([]);

  // convert parsed query into url
  const parsedQuery = query.split(' ').join('+');
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${parsedQuery}`;
  console.log('url: ', url);

  const { data, error} = useSWR(url, fetcher);
  console.log('inside useFetch: data: ', data);
  console.log('query inside of useEffect in useFetch: ', query);

  return { data, error };
};

export default useFetch;