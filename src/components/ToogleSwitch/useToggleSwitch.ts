import { useCallback, useEffect, useRef, useState } from 'react';
import { ToggleItem } from './types';

export const useToggleSwitch = ({
  items,
  deafultValue,
}: {
  items: ToggleItem[];
  deafultValue?: string;
}) => {
  const [sliderValue, setSliderValue] = useState<string>(
    deafultValue || items[0].value
  );
  const [sliderStyle, setSliderStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const updateSliderPosition = useCallback(
    (value: string): void => {
      const activeIndex = items.findIndex((item) => item.value === value);

      if (buttonsRef.current[activeIndex]) {
        const { offsetWidth, offsetLeft } = buttonsRef.current[activeIndex]!;
        setSliderStyle({ width: offsetWidth, left: offsetLeft });
      }
    },
    [items]
  );

  const handleButtonClick = (value: string): void => {
    updateSliderPosition(value);
    setSliderValue(value);
  };

  useEffect(() => {
    updateSliderPosition(sliderValue);
  }, [sliderValue, items]);

  return {
    sliderStyle,
    handleButtonClick,
    sliderValue,
    buttonsRef,
  };
};
