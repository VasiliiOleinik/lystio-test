import { getHystogramData } from '@/api';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HistorygramBarsType } from './types';

export const usePriceFilterSection = () => {
  const { searchParams } = useFilters();
  const { maxPrice, minPrice, setMinPrice, setMaxPrice } = useFiltersStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const minPriceURL = Number(searchParams?.get('minPrice')) || minPrice;
  const maxPriceURL = Number(searchParams?.get('maxPrice')) || maxPrice;

  const [maxAndMinPrice, setMaxAndMinPrice] = useState<[number, number]>([
    minPriceURL,
    maxPriceURL,
  ]);
  const [priceRange, setPriceRange] = useState<number[]>([
    minPriceURL,
    maxPriceURL,
  ]);

  useClickOutside({
    ref: dropdownRef,
    callback: () => {
      setMinPrice(priceRange[0]);
      setMaxPrice(priceRange[1]);
      setIsMenuOpen(false);
    },
  });

  const { data: hystogramData, isLoading } = useQuery({
    queryKey: ['hystogramData'],
    queryFn: getHystogramData,
  });

  useEffect(() => {
    if (!hystogramData || isLoading) return;

    let [min, max] = hystogramData.range || [minPrice, maxPrice];

    setPriceRange([min, max]);
    setMaxAndMinPrice([min, max]);
  }, [hystogramData, isLoading, minPrice, maxPrice]);

  const maxHistogramValue = useMemo(() => {
    return hystogramData?.histogram?.length
      ? Math.max(...hystogramData.histogram)
      : 1;
  }, [hystogramData]);

  const histogramBars = useMemo((): HistorygramBarsType[] => {
    if (!hystogramData?.histogram?.length) return [];

    const [min, max] = maxAndMinPrice;
    const stepSize = (max - min) / hystogramData.histogram.length;

    return hystogramData.histogram.map((count, index) => {
      const barMin = min + index * stepSize;
      const barMax = barMin + stepSize;
      const isActive = barMax >= priceRange[0] && barMin <= priceRange[1];

      return { count, isActive, barMin, barMax };
    });
  }, [priceRange, hystogramData?.histogram]);

  const searchPriceValue = `${minPriceURL} - ${maxPriceURL} €`;

  return {
    dropdownRef,
    isMenuOpen,
    setIsMenuOpen,
    hystogramData,
    maxHistogramValue,
    histogramBars,
    priceRange,
    setPriceRange,
    maxAndMinPrice,
    searchPriceValue,
  };
};
