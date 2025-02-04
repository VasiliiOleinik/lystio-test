'use client';
import useFilters from '@/hooks/useFilters';

export const useSearchFilters = () => {
  const { searchParams, setFilter } = useFilters();

  return {
    searchParams,
    setFilter,
  };
};
