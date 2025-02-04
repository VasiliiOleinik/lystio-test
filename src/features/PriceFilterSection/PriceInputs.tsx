import Input from '@/components/Input';
import React from 'react';

const PriceInputs = ({ setValues, values }) => {
  const handleMinChange = (value) => {
    const newMin = Math.min(value, values[1]);
    setValues([newMin, values[1]]);
  };

  const handleMaxChange = (value) => {
    const newMax = Math.max(value, values[0]);
    setValues([values[0], newMax]);
  };

  return (
    <div className="flex justify-between mt-9">
      <div className="flex flex-col w-[33%]">
        <Input
          label="Min"
          type="number"
          value={values[0]}
          onChange={(value) => handleMinChange(value)}
        />
      </div>
      <div className="flex flex-col w-[33%]">
        <Input
          label="Max"
          type="number"
          value={values[1]}
          onChange={(value) => handleMaxChange(value)}
        />
      </div>
    </div>
  );
};

export default PriceInputs;
