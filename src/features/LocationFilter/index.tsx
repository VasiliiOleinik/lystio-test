import FilterInput from '@/components/FilterInput';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { useLocationFilter } from './useLocationFilter';
import Cities from './Cities';
import Districts from './Districts';
import RecentLocations from './RecentLocations';
import AnimatedCard from '@/components/Card';
import { cn } from '@/utils';
import { BUTTON_TYPES } from '@/constants';

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
    setSelectedCity,
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
                `lg:min-w-[370px]flex items-start justify-start xsm:w-full`,
                city ? 'lg:w-[772px] xsm:w-full' : ''
              )}
            >
              <div
                className={cn(
                  `lg:flex flex-col lg:max-w-1/2 lg:w-full max-h-[400px] overflow-auto `,
                  city ? 'lg:max-w-1/2 xsm:hidden' : 'xsm:w-full'
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
                <>
                  <button
                    type={BUTTON_TYPES.button}
                    className="lg:hidden xsm:flex xsm:mb-2"
                    onClick={() => setSelectedCity('')}
                  >
                    Back
                  </button>
                  <div className="flex flex-col lg:max-w-1/2 lg:w-full max-h-[400px] overflow-auto xsm:w-full">
                    <Districts
                      city={city}
                      handleDistrictSelect={handleDistrictSelect}
                      selectedDistrict={selectedDistrict}
                    />
                  </div>
                </>
              )}
            </div>
          </AnimatedCard>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationFilter;
