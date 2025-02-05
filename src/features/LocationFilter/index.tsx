'use client';
import { FilterInput, AnimatedCard } from '@/components';
import { AnimatePresence } from 'motion/react';
import React from 'react';
import { useLocationFilter } from './useLocationFilter';
import Cities from './Cities';
import Districts from './Districts';
import RecentLocations from './RecentLocations';
import { cn } from '@/utils';
import { BUTTON_TYPES } from '@/constants';
import Image from 'next/image';

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
    locationMutation,
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
          <Image src="/search.svg" alt="Search" width={21} height={22} />
        </FilterInput>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <AnimatedCard>
            <div
              className={cn(
                `lg:min-w-[370px] flex items-start justify-start xsm:w-full lg:flex-row xsm:flex-col`,
                city ? 'lg:w-[772px] xsm:w-full' : ''
              )}
            >
              <div
                className={cn(
                  `lg:flex flex-col lg:max-w-1/2 lg:w-full max-h-[400px] overflow-auto `,
                  city ? 'lg:max-w-1/2 xsm:hidden' : 'xsm:w-full'
                )}
              >
                <button
                  type="button"
                  className="flex items-center mb-4"
                  onClick={() => locationMutation()}
                >
                  <Image
                    src="/userlocationIcon.svg"
                    alt="Lystio logo"
                    width={37}
                    height={37}
                  />
                  <div className="flex flex-col ml-4 text-left">
                    <span className="text-black text-base font-medium mb-2">
                      Current Location
                    </span>
                  </div>
                </button>
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
