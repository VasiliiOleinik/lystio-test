import LocationFilter from '@/features/LocationFilter';
import React from 'react';
import Button from '../Button';

const SearchFilters = () => {
    return (
        <div className='w-full bg-white rounded-1000px p-5 grid grid-cols-[700px_260px_260px_170px] gap-4'>
            <LocationFilter />
            <Button isActive={true} className='py-6 px-2'>Search</Button>
        </div>
    );
};

export default SearchFilters;