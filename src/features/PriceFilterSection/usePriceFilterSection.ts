import { getHystogramData } from '@/api';
import { useClickOutside } from '@/hooks/useClickOutside';
import useFilters from '@/hooks/useFilters';
import { useFiltersStore } from '@/store/useFiltersStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';

export const usePriceFilterSection = () => {
  const { searchParams } = useFilters();
  const { maxPrice, minPrice } = useFiltersStore();
  const dropdownRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const minPriceURL = Number(searchParams?.get('minPrice')) || minPrice;
  const maxPriceURL = Number(searchParams?.get('maxPrice')) || maxPrice;

  useClickOutside(dropdownRef, () => setIsMenuOpen(false));

  const { data: hystogramData, isLoading } = useQuery({
    queryKey: ['hystogramData'],
    queryFn: getHystogramData,
  });

  const [maxAndMinPrice, setMaxAndMinPrice] = useState<[number, number]>([
    minPriceURL,
    maxPriceURL,
  ]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPriceURL,
    maxPriceURL,
  ]);

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

  const histogramBars = useMemo(() => {
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

  const searchPriceValue = `${minPrice} - ${maxPrice} €`;

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
