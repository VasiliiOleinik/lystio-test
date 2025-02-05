'use client';
import LocationFilter from '@/features/LocationFilter';
import React from 'react';
import { Button, ToggleSwitch } from '@/components';
import CategoryFilter from '@/features/CategoryFilter';
import PriceFilterSection from '@/features/PriceFilterSection';
import { TOOGLE_ITEMS } from './constants';
import { useSearchFilters } from './useSearchFilters';
import { motion } from 'motion/react';

const SearchFilters = () => {
  const { setRentType, handleSubmit, defaultRentType } = useSearchFilters();

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <ToggleSwitch
          className="mb-6 lg:ml-6 xsm:ml-0"
          items={TOOGLE_ITEMS}
          deafultValue={defaultRentType}
          onChange={(value) => setRentType(value)}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
        className={`
          w-full bg-white p-5
          xsm:flex xsm:flex-col xsm:rounded-3xl
          lg:grid-cols-[1fr_1fr_1fr_0.5fr] lg:grid lg:gap-4 lg:rounded-1000px 
          2xl:grid-cols-[2fr_1fr_1fr_0.5fr]
      `}
      >
        <LocationFilter />
        <div className="lg:border-x lg:border-lightGreyLystio lg:px-5 lg:my-0 xsm:border-none xsm:px-0 xsm:my-4">
          <CategoryFilter />
        </div>
        <PriceFilterSection />
        <Button
          state="active"
          size="small"
          onClick={handleSubmit}
          className="lg:mt-0 xsm:mt-4"
        >
          Search
        </Button>
      </motion.div>
    </div>
  );
};

export default SearchFilters;
