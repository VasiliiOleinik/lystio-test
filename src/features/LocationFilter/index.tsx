import Input from '@/components/Input';
import React from 'react';

const LocationFilter = () => {
  return (
    <>
      <Input
        placeholder="Search address, neighbourhood, city, or ZIP code"
        label="Location"
        id="location-input"
      >
        <img src="/search.svg" alt="Search" />
      </Input>
    </>
  );
};

export default LocationFilter;
