import { useCallback } from 'react';

interface IuseDebounce {
  fn: () => void;
  ms: number;
}

const useDebounce = ({ fn, ms }: IuseDebounce) => {
  const onUseDebounce = useCallback(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    return () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        fn();
      }, ms);
    };
  }, [fn, ms]);

  return onUseDebounce();
};

export default useDebounce;
