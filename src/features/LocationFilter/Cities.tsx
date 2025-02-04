import React from 'react';
import { LOCATIONS_IMAGES } from './constants';
import { CitiesComponentType } from './types';

const Cities = ({
  citiesAndDistricts,
  handleCitySelect,
  selectedCity,
}: CitiesComponentType) => {
  return (
    <div>
      <p className="text-sm font-medium text-textLightGrey opacity-60 mb-3">
        Popular Locations
      </p>
      {citiesAndDistricts.map((city) => {
        const isActive = selectedCity === city.id;

        return (
          <button
            key={city.id}
            onClick={() => handleCitySelect(city)}
            className={`flex items-center rounded w-full text-left mb-2 relative ${
              isActive ? 'bg-activeOption' : 'hover:bg-activeOption'
            }`}
          >
            <img
              src={LOCATIONS_IMAGES[city.name as keyof typeof LOCATIONS_IMAGES]}
              alt="City"
              width={47}
              height={47}
              className="mr-4"
            />
            <span className="text-base text-black font-medium">
              {city.name}
            </span>

            {!!isActive && (
              <img
                src="./arrow.svg"
                alt="Arrow"
                width={6}
                height={10}
                className="absolute right-6"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Cities;
