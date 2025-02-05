'use client';
import {
  fetchSearchResults,
  getAddressFromCoords,
  getCitiesAndDistricts,
  getRecentSearch,
} from '@/api';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { LocationType } from '@/types';
import { getUserLocation } from '@/hooks/getUserLocation';

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
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );

  const debouncedSearchTerm = useDebounce(searchValue);

  const handleSetLocation = useCallback(
    (location: LocationType): void => {
      setLocation(location);
      setSearchValue(location.name);
    },
    [setLocation]
  );

  function handleCitySelect(location: LocationType): void {
    setSelectedCity(location.id);
    setSelectedDistrict('');
    handleSetLocation(location);
  }

  function handleDistrictSelect(location: LocationType): void {
    setSelectedDistrict(location.id);
    setSearchValue(location.name);
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

  const { data: searchResults = [], isLoading } = useQuery({
    queryKey: ['mapboxSearch', debouncedSearchTerm],
    queryFn: () => fetchSearchResults(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
    staleTime: 1000 * 60,
    retry: false,
  });

  const { mutate: locationMutation } = useMutation({
    mutationFn: getUserLocation,
    onSuccess: (coords) => setCoords(coords),
    onError: () => alert('Location error'),
  });

  const { data: address } = useQuery({
    queryKey: ['address', coords],
    queryFn: () => getAddressFromCoords(coords!.lat, coords!.lon),
    enabled: !!coords,
  });

  console.log('address', address);

  useEffect(() => {
    if (!isLoading && searchResults?.id) {
      handleSetLocation({ id: searchResults.id, name: searchResults.text });
    }
  }, [isLoading, searchResults, handleSetLocation]);

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
    locationMutation,
  };
};
