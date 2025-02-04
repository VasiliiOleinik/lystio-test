import FilterInput from '@/components/FilterInput';
import React from 'react';

const LocationFilter = () => {
  return (
    <>
      <FilterInput
        placeholder="Search address, neighbourhood, city, or ZIP code"
        label="Location"
        id="location-input"
      >
        <img src="/search.svg" alt="Search" />
      </FilterInput>
    </>
  );
};

export default LocationFilter;
