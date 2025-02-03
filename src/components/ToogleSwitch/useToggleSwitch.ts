import { useCallback, useEffect, useRef, useState } from 'react';
import { ToggleItem } from './types';
import useFilters from '@/hooks/useFilters';

export const useToggleSwitch = ({items}: {items: ToggleItem[]}) => {
    const {searchParams, setFilter} = useFilters()
    const rentType = searchParams?.get("rentType") || items[0].value;
    const [sliderStyle, setSliderStyle] = useState<{ width: number; left: number }>({ width: 0, left: 0 });
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const updateSliderPosition = useCallback((value: string): void => {
        const activeIndex = items.findIndex((item) => item.value === value);

        if (buttonsRef.current[activeIndex]) {
          const { offsetWidth, offsetLeft } = buttonsRef.current[activeIndex]!;
          setSliderStyle({ width: offsetWidth, left: offsetLeft });
        }
      }, [items]);
    
      const handleButtonClick = (value: string): void => {
        setFilter("rentType", value);
        updateSliderPosition(value);
      };
    
      useEffect(() => {
        updateSliderPosition(rentType);
      }, [rentType, items]);

    return  {
        sliderStyle, 
        handleButtonClick,     
        rentType,
        buttonsRef
    }
};

