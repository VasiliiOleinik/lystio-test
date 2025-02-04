'use client';
import { getSearchCount } from '@/api';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useQuery } from '@tanstack/react-query';

export const useHeroSection = () => {
  const { searchCount } = useFiltersStore();
  const { data: totalCount } = useQuery({
    queryKey: ['totalCount'],
    queryFn: getSearchCount,
  });

  return {
    searchCount,
    totalCount,
  };
};
