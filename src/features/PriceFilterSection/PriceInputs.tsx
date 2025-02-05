import { Input } from '@/components';
import React from 'react';
import { PriceInputsProps } from './types';

const PriceInputs = ({ setValues, values }: PriceInputsProps) => {
  const handleMinChange = (value: number): void => {
    const newMin = Math.min(value, values[1]);
    setValues([newMin, values[1]]);
  };

  const handleMaxChange = (value: number): void => {
    const newMax = Math.max(value, values[0]);
    setValues([values[0], newMax]);
  };

  return (
    <div className="flex justify-between mt-9">
      <div className="flex flex-col w-[33%]">
        <Input
          label="Min"
          type="number"
          value={String(values[0])}
          onChange={(value) => handleMinChange(Number(value))}
        />
      </div>
      <div className="flex flex-col w-[33%]">
        <Input
          label="Max"
          type="number"
          value={String(values[1])}
          onChange={(value) => handleMaxChange(Number(value))}
        />
      </div>
    </div>
  );
};

export default PriceInputs;
