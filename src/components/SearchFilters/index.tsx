"use client";
import LocationFilter from '@/features/LocationFilter';
import React from 'react';
import Button from '../Button';
import CategoryFilter from '@/features/CategoryFilter';
import PriceFilter from '@/features/PriceFilter';
import ToggleSwitch from '../ToogleSwitch';
import { TOOGLE_ITEMS } from './constants';

const SearchFilters = () => {

    return (
       <div className='flex flex-col'>
         <ToggleSwitch className="mb-6 ml-6" items={TOOGLE_ITEMS}/>
            <div className="w-full bg-white rounded-1000px p-5 grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-4">
                <LocationFilter />
                <div className='border-x border-lightGreyLystio px-5'>
                    <CategoryFilter/>
                </div>
                <PriceFilter />
                <Button state="active" size="small">Search</Button>
            </div>
       </div>
    );
};

export default SearchFilters;