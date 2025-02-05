import { DEBOUNCE_DELAY } from '@/constants';
import { useEffect, useState } from 'react';

export const useDebounce = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  delay: DEBOUNCE_DELAY = DEBOUNCE_DELAY.short
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
