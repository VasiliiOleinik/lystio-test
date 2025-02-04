import React from 'react';
import LocationItem from './LocationItem';

const RecentLocations = ({
  recentSearch,
  handleDistrictSelect,
  selectedDistrict,
}) => {
  return (
    <div>
      <p className="text-sm font-medium text-textLightGrey opacity-60 mb-3">
        Recent Searches
      </p>

      <ul>
        {recentSearch.map((district) => (
          <li
            key={district.id}
            onClick={() => handleDistrictSelect(district.id)}
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
    </div>
  );
};

export default RecentLocations;
