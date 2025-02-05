'use client';
import {
  fetchSearchResults,
  getCitiesAndDistricts,
  getRecentSearch,
} from '@/api';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { LocationType } from '@/types';

export const useLocationFilter = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { searchParams } = useFilters();
  const { location, setLocation } = useFiltersStore();
  const searchLocationValue =
    searchParams?.get('location') || location?.id || '';
  const locationName =
    searchParams?.get('locationName') || location?.name || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(locationName);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchValue);

  function handleSetLocation(location: LocationType): void {
    setLocation(location);
    setSearchValue(location.name);
  }

  function handleCitySelect(location: LocationType): void {
    setSelectedCity(location.id);
    setSelectedDistrict('');
    handleSetLocation(location);
  }

  function handleDistrictSelect(location: LocationType): void {
    setSelectedDistrict(location.id);
    handleSetLocation(location);
    setIsMenuOpen(false);
  }

  useClickOutside({
    ref: dropdownRef,
    callback: () => {
      setIsMenuOpen(false);
    },
  });

  const { data: citiesAndDistricts = [] } = useQuery({
    queryKey: ['citiesAndDistricts'],
    queryFn: getCitiesAndDistricts,
  });

  const { data: recentSearch = [] } = useQuery({
    queryKey: ['recentSearch'],
    queryFn: getRecentSearch,
  });

  const { data: searchResults = [] } = useQuery({
    queryKey: ['mapboxSearch', debouncedSearchTerm],
    queryFn: () => fetchSearchResults(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
    staleTime: 1000 * 60,
    retry: false,
  });

  console.log('searchResults', searchResults);

  return {
    searchLocationValue,
    isMenuOpen,
    setIsMenuOpen,
    dropdownRef,
    citiesAndDistricts,
    selectedCity,
    selectedDistrict,
    handleCitySelect,
    handleDistrictSelect,
    recentSearch,
    searchValue,
    setSearchValue,
    setSelectedCity,
  };
};
