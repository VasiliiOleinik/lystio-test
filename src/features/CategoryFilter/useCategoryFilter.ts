"use client";
import useFilters from '@/hooks/useFilters';
import  { useState } from 'react';

export const useCategoryFilter = () => {
    const { searchParams, setFilter } = useFilters()
    const searchCategoryValue = searchParams?.get('category') || ''
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleSetCategory(value: string): void {
        setFilter('category', value)
        setIsMenuOpen(false)
    }

    return {
        handleSetCategory,
        searchCategoryValue,
        isMenuOpen,
        setIsMenuOpen
    }
};
