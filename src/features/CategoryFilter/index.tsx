'use client';
import { FilterInput, AnimatedCard } from '@/components';
import React from 'react';
import { CATEGORY_OPTIONS } from './categories';
import { BUTTON_TYPES } from '@/constants';
import { useCategoryFilter } from './useCategoryFilter';
import { AnimatePresence } from 'motion/react';
import { cn } from '@/utils';
import Image from 'next/image';

const CategoryFilter = () => {
  const {
    handleSetCategory,
    searchCategoryValue,
    isMenuOpen,
    setIsMenuOpen,
    dropdownRef,
  } = useCategoryFilter();

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer"
      >
        <FilterInput
          placeholder="Select Category"
          label="Category"
          id="category-input"
          readOnly
          defaultValue={searchCategoryValue}
        >
          <Image src="/category.svg" alt="Category" width={24} height={25} />
        </FilterInput>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <AnimatedCard>
            <div className="flex lg:min-w-[444px] lg:w-full flex-col xsm:w-full">
              <button
                className="flex items-center justify-start mb-2 font-semibold text-lg"
                onClick={() => handleSetCategory('')}
                type={BUTTON_TYPES.button}
              >
                All categories
              </button>
              {CATEGORY_OPTIONS.map(({ value, name, icon }) => {
                return (
                  <button
                    key={value}
                    onClick={() => handleSetCategory(value)}
                    type={BUTTON_TYPES.button}
                    className={cn(
                      'rounded-xl flex items-center px-4 py-2 mb-2 transition hover:bg-gray-100 text-nowrap',
                      searchCategoryValue === value && 'bg-purpleLystio/10'
                    )}
                  >
                    {icon}
                    <span className="ml-4 font-medium text-base">{name}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedCard>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryFilter;
