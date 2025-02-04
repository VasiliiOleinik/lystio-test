'use client';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useRef, useState } from 'react';

export const useCategoryFilter = () => {
  const { searchParams, setFilter } = useFilters();
  const searchCategoryValue = searchParams?.get('category') || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLElement>(null);

  useClickOutside(dropdownRef, () => setIsMenuOpen(false));

  function handleSetCategory(value: string): void {
    setFilter('category', value);
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
