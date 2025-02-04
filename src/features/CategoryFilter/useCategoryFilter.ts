'use client';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useRef, useState } from 'react';

export const useCategoryFilter = () => {
  const { searchParams } = useFilters();
  const { category, setCategory } = useFiltersStore();
  const searchCategoryValue = searchParams?.get('category') || category || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: dropdownRef,
    callback: () => {
      setIsMenuOpen(false);
    },
  });

  function handleSetCategory(value: string): void {
    setCategory(value);
    setIsMenuOpen(false);
  }

  return {
    handleSetCategory,
    searchCategoryValue,
    isMenuOpen,
    setIsMenuOpen,
    dropdownRef,
  };
};
