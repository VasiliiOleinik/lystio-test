import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { ToggleSwitchProps } from './types';
import { useToggleSwitch } from './useToggleSwitch';

export const ToggleSwitch = ({
  items = [],
  className = '',
  onChange,
  deafultValue = '',
}: ToggleSwitchProps) => {
  const { sliderStyle, handleButtonClick, sliderValue, buttonsRef } =
    useToggleSwitch({ items, deafultValue });

  return (
    <div
      className={`relative inline-flex items-center bg-white rounded-full border border-purpleLystio w-fit ${className}`}
    >
      <motion.div
        className="absolute top-0 h-full bg-purpleLystio rounded-full"
        animate={sliderStyle}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {items.map((item, index) => (
        <button
          key={item.value}
          ref={(el) => {
            buttonsRef.current[index] = el;
          }}
          className={cn(
            'relative z-10 text-base font-medium lg:py-4 lg:px-10 xsm:py-2 xsm:px-6 transition-colors flex items-center justify-center whitespace-nowrap',
            sliderValue === item.value ? 'text-white' : 'text-black'
          )}
          onClick={() => {
            handleButtonClick(item.value);
            onChange(item.value);
          }}
        >
          {item.icon && <span className="mr-2 flex-shrink-0">{item.icon}</span>}
          {item.name}
        </button>
      ))}
    </div>
  );
};

ToggleSwitch.componentName = 'ToggleSwitch';
