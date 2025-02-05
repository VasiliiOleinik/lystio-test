import FilterInput from '@/components/FilterInput';
import React from 'react';
import { AnimatePresence } from 'motion/react';
import { usePriceFilterSection } from './usePriceFilterSection';
import HistorygramBars from './HistorygramBars';
import PriceInputs from './PriceInputs';
import { Range, getTrackBackground } from 'react-range';
import AnimatedCard from '@/components/Card';
import { STEP } from './constants';

const PriceFilterSection = () => {
  const {
    dropdownRef,
    isMenuOpen,
    setIsMenuOpen,
    maxHistogramValue,
    histogramBars,
    priceRange,
    setPriceRange,
    maxAndMinPrice,
    searchPriceValue,
  } = usePriceFilterSection();
  const [min, max] = maxAndMinPrice;

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer"
      >
        <FilterInput
          placeholder="Select Price Range"
          label="Price"
          id="price-input"
          readOnly
          defaultValue={searchPriceValue}
        >
          <img src="/price.svg" alt="Price" />
        </FilterInput>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <AnimatedCard>
            <div className="xl:w-[500px] lg:w-[350px]">
              <p className="text-lg font-semibold mb-3">Price Range</p>

              <HistorygramBars
                histogramBars={histogramBars}
                maxHistogramValue={maxHistogramValue}
              />

              <Range
                values={priceRange}
                step={STEP}
                min={min}
                max={max}
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full h-2 rounded-[1px]"
                    style={{
                      background: getTrackBackground({
                        values: priceRange,
                        colors: ['#EEE7FF', '#A855F7', '#EEE7FF'],
                        min,
                        max,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    key={props.key}
                    className="w-11 h-11 border border-lightPurpleLystio rounded-full bg-gradient-to-b from-white to-[#F6F3FD] shadow-[0px_14px_32px_rgba(0,0,0,0.1)]"
                  />
                )}
              />

              <PriceInputs setValues={setPriceRange} values={priceRange} />
            </div>
          </AnimatedCard>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceFilterSection;
