'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SetFiltersProps, UseFilters } from './types';

const useFilters = (): UseFilters => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [params, setParams] = useState(new URLSearchParams());

  useEffect(() => {
    setParams(new URLSearchParams(searchParams?.toString() || ''));
  }, [searchParams]);

  const setFilters = (filters: SetFiltersProps) => {
    const newParams = new URLSearchParams(params.toString());

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    router.push(`?${newParams.toString()}`);
  };

  return { searchParams, setFilters };
};

export default useFilters;
