'use client';
import LocationFilter from '@/features/LocationFilter';
import React from 'react';
import Button from '@/components/Button';
import CategoryFilter from '@/features/CategoryFilter';
import PriceFilterSection from '@/features/PriceFilterSection';
import ToggleSwitch from '@/components/ToogleSwitch';
import { TOOGLE_ITEMS } from './constants';
import { useSearchFilters } from './useSearchFilters';

const SearchFilters = () => {
  const { setRentType, handleSubmit, defaultRentType } = useSearchFilters();

  return (
    <div className="flex flex-col">
      <ToggleSwitch
        className="mb-6 ml-6"
        items={TOOGLE_ITEMS}
        deafultValue={defaultRentType}
        onChange={(value) => setRentType(value)}
      />
      <div className="w-full bg-white rounded-1000px p-5 grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-4">
        <LocationFilter />
        <div className="border-x border-lightGreyLystio px-5">
          <CategoryFilter />
        </div>
        <PriceFilterSection />
        <Button state="active" size="small" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
