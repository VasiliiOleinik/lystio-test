import Card from '@/components/Card';
import FilterInput from '@/components/FilterInput';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { useLocationFilter } from './useLocationFilter';
import Cities from './Cities';
import Districts from './Districts';
import RecentLocations from './RecentLocations';

const LocationFilter = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    dropdownRef,
    citiesAndDistricts,

    selectedCity,
    selectedDistrict,
    handleCitySelect,
    handleDistrictSelect,
    recentSearch,

    searchValue,
    setSearchValue,
  } = useLocationFilter();

  const city = citiesAndDistricts?.find((c) => c.id === selectedCity);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer"
      >
        <FilterInput
          placeholder="Search address, neighbourhood, city, or ZIP code"
          label="Location"
          id="location-input"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        >
          <img src="/search.svg" alt="Search" />
        </FilterInput>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <Card
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[calc(100%+25px)] min-w-[444px] w-full"
          >
            <div className="min-w-[372px] max-w-[772px] flex items-start justify-start">
              <div className="flex flex-col max-w-1/2 w-full max-h-[400px] overflow-auto">
                <Cities
                  handleCitySelect={handleCitySelect}
                  selectedCity={selectedCity}
                  citiesAndDistricts={citiesAndDistricts}
                />
                {!!recentSearch?.length && (
                  <RecentLocations
                    recentSearch={recentSearch}
                    handleCitySelect={handleCitySelect}
                    selectedCity={selectedCity}
                  />
                )}
              </div>
              {!!city && (
                <Districts
                  city={city}
                  handleDistrictSelect={handleDistrictSelect}
                  selectedDistrict={selectedDistrict}
                />
              )}
            </div>
          </Card>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationFilter;
