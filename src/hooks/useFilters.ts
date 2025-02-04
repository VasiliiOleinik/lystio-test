'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UseFilters } from './types';

const useFilters = (): UseFilters => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [params, setParams] = useState(new URLSearchParams());

  useEffect(() => {
    setParams(new URLSearchParams(searchParams?.toString() || ''));
  }, [searchParams]);

  const setFilters = (filters: Record<string, string | number | null>) => {
    const newParams = new URLSearchParams(params.toString());

    // Обновляем все переданные параметры
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    // Обновляем URL один раз
    router.push(`?${newParams.toString()}`);
  };

  return { searchParams, setFilters };
};

export default useFilters;
