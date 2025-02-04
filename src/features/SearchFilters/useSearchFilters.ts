'use client';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';

export const useSearchFilters = () => {
  const { searchParams, setFilters } = useFilters();
  const defaultRentType = searchParams?.get('rentType') || 'rent';
  const { maxPrice, minPrice, location, category, rentType, setRentType } =
    useFiltersStore();

  function handleSubmit() {
    setFilters({
      rentType,
      category,
      location: location.id,
      minPrice,
      maxPrice,
      locationName: location.name,
    });
    console.log('search', {
      withinId: location,
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
