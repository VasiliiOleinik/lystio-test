import LocationFilter from '@/features/LocationFilter';
import React from 'react';
import Button from '../Button';
import CategoryFilter from '@/features/CategoryFilter';
import PriceFilter from '@/features/PriceFilter';

const SearchFilters = () => {
    return (
        <div className="w-full bg-white rounded-1000px p-5 grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-4">
            <LocationFilter />
            <div className='border-x border-lightGreyLystio px-5'>
                <CategoryFilter />
            </div>
            <PriceFilter />
            <Button state="active" size="small">Search</Button>
        </div>
    );
};

export default SearchFilters;