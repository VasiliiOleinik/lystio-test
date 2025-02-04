import { getCitiesAndDistricts, getRecentSearch } from '@/api';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';

export const useLocationFilter = () => {
  const { searchParams } = useFilters();
  const { location, setLocation } = useFiltersStore();
  const searchLocationValue = searchParams?.get('location') || location || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLElement>(null);

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

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
  };
};
