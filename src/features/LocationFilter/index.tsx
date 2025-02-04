import FilterInput from '@/components/FilterInput';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { useLocationFilter } from './useLocationFilter';
import Cities from './Cities';
import Districts from './Districts';
import RecentLocations from './RecentLocations';
import AnimatedCard from '@/components/Card';
import { cn } from '@/utils';

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
          onChange={(e) => setSearchValue(e.target.value)}
        >
          <img src="/search.svg" alt="Search" />
        </FilterInput>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <AnimatedCard>
            <div
              className={cn(
                `min-w-[370px] flex items-start justify-start`,
                city ? 'w-[772px]' : ''
              )}
            >
              <div
                className={cn(
                  `flex flex-col max-w-1/2 w-full max-h-[400px] overflow-auto`,
                  city ? 'max-w-1/2' : ''
                )}
              >
                <Cities
                  handleCitySelect={handleCitySelect}
                  selectedCity={selectedCity}
                  citiesAndDistricts={citiesAndDistricts}
                />
                {!!recentSearch?.length && (
                  <RecentLocations
                    recentSearch={recentSearch}
                    handleDistrictSelect={handleDistrictSelect}
                    selectedDistrict={selectedDistrict}
                  />
                )}
              </div>
              {!!city && (
                <div className="flex flex-col max-w-1/2 w-full max-h-[400px] overflow-auto">
                  <Districts
                    city={city}
                    handleDistrictSelect={handleDistrictSelect}
                    selectedDistrict={selectedDistrict}
                  />
                </div>
              )}
            </div>
          </AnimatedCard>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationFilter;
