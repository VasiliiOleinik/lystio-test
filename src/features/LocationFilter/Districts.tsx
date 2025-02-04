import React from 'react';
import LocationItem from './LocationItem';
import { DistrictsComponentType } from './types';

const Districts = ({
  city,
  handleDistrictSelect,
  selectedDistrict,
}: DistrictsComponentType) => {
  return (
    <>
      <p className="text-sm font-medium text-textLightGrey opacity-60 mb-2">
        Districts in {city.name}
      </p>

      <ul>
        {city.children.map((district) => (
          <li
            key={district.id}
            onClick={() => handleDistrictSelect(district)}
            className={`flex px-4 py-1 items-center cursor-pointer rounded ${
              selectedDistrict === district.id
                ? 'bg-activeOption'
                : 'hover:bg-activeOption'
            }`}
          >
            <LocationItem district={district} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Districts;
