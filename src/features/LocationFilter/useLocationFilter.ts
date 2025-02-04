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

export const useLocationFilter = () => {
  const { searchParams } = useFilters();
  const { location, setLocation } = useFiltersStore();
  const searchLocationValue = searchParams?.get('location') || location || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const debouncedSearchTerm = useDebounce(searchValue);

  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    setSelectedDistrict(null);
    setLocation(cityId);
  };

  const handleDistrictSelect = (districtId: string) => {
    setSelectedDistrict(districtId);
    setLocation(districtId);
  };

  useClickOutside(dropdownRef, () => setIsMenuOpen(false));

  const { data: citiesAndDistricts } = useQuery({
    queryKey: ['citiesAndDistricts'],
    queryFn: getCitiesAndDistricts,
  });

  const { data: recentSearch } = useQuery({
    queryKey: ['recentSearch'],
    queryFn: getRecentSearch,
  });

  const { data: searchResults } = useQuery({
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
  };
};
