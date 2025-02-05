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
        className="mb-6 lg:ml-6 xsm:ml-0"
        items={TOOGLE_ITEMS}
        deafultValue={defaultRentType}
        onChange={(value) => setRentType(value)}
      />
      <div
        className={`
          w-full bg-white p-5
          xsm:flex xsm:flex-col xsm:rounded-3xl
          lg:grid-cols-[1fr_1fr_1fr_0.5fr] lg:grid lg:gap-4 lg:rounded-1000px 
          2xl:grid-cols-[2fr_1fr_1fr_0.5fr]
      `}
      >
        <LocationFilter />
        <div className="lg:border-x lg:border-lightGreyLystio lg:px-5 xsm:border-none xsm:px-0">
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
