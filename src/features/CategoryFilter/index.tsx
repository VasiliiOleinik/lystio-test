import Card from '@/components/Card/inedex';
import Input from '@/components/Input';
import React from 'react';
import { CATEGORY_OPTIONS } from './categories';
import { BUTTON_TYPES } from '@/constants';
import { useCategoryFilter } from './useCategoryFilter';
import { AnimatePresence } from 'motion/react';
import { cn } from '@/utils';

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
        <Input
          placeholder="Select Category"
          label="Category"
          id="category-input"
          readOnly
          defaultValue={searchCategoryValue}
        >
          <img src="/category.svg" alt="Category" />
        </Input>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <Card
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[calc(100%+25px)] min-w-[444px] w-full"
          >
            <div className="flex flex-col">
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
          </Card>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryFilter;
