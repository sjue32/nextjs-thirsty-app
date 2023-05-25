import { useEffect, useRef, useMemo } from 'react';
import { debounce } from 'lodash';

export default function useDebounce(callback: (arg1: string, arg2: React.Dispatch<React.SetStateAction<any>>) => Promise<void>) {

  const ref = useRef<any>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {

    function func() {
      ref?.current();
    }

    return debounce(func, 300);
  }, []);

  return debouncedCallback;
};