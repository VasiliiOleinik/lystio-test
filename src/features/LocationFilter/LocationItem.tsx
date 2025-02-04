import React from 'react';

const LocationItem = ({ district }) => {
  const { name, postal_code } = district;

  return (
    <div className="flex items-center mb-2">
      <img src="/locationPoint.svg" alt="Lystio logo" width={37} height={37} />
      <div className="flex flex-col ml-4 text-left">
        <span className="text-black text-base font-medium mb-2">{name}</span>
        <span className="text-black text-sm font-medium  opacity-60">
          {postal_code}
        </span>
      </div>
    </div>
  );
};

export default LocationItem;
