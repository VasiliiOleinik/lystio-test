'use client';
import { tenementSearch } from '@/api';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useMutation } from '@tanstack/react-query';

export const useSearchFilters = () => {
  const { searchParams, setFilters } = useFilters();
  const defaultRentType = searchParams?.get('rentType') || 'rent';
  const {
    maxPrice,
    minPrice,
    location,
    category,
    rentType,
    setRentType,
    setSearchCount,
  } = useFiltersStore();

  const { mutate } = useMutation({
    mutationFn: tenementSearch,
    onSuccess: ({ paging }) => {
      setSearchCount(paging.totalCount);
    },
  });

  function handleSubmit() {
    setFilters({
      rentType,
      category,
      location: location.id,
      minPrice,
      maxPrice,
      locationName: location.name,
    });

    mutate({
      withinId: location.id,
      rentType,
      type: category,
      rent: [minPrice, maxPrice],
    });
  }
  return {
    searchParams,
    setRentType,
    handleSubmit,
    defaultRentType,
  };
};
