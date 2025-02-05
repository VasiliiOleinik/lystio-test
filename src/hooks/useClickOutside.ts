import { useEffect, useRef } from 'react';
import { UseClickOutsideProps } from './types';

export function useClickOutside({ ref, callback }: UseClickOutsideProps): void {
  const handlerRef = useRef<(event: MouseEvent) => void | null>(null);

  useEffect(() => {
    handlerRef.current = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
  }, [ref, callback]);

  useEffect(() => {
    if (!handlerRef.current) return;

    document.addEventListener('mousedown', handlerRef.current);
    return () => {
      document.removeEventListener(
        'mousedown',
        handlerRef.current as EventListener
      );
    };
  }, []);
}
