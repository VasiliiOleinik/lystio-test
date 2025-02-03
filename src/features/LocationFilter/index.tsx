import Input from '@/components/Input';
import React from 'react';

const LocationFilter = () => {
    return (
        <div className='w-full'>
            <Input 
                placeholder='Search address, neighbourhood, city, or ZIP code'
                label="Location">
                <img src="/search.svg" alt="Search" />
            </Input>
        </div>
    );
};

export default LocationFilter;