import React from 'react';
import { FilterInputProps } from './types';

export const FilterInput = ({
  placeholder = '',
  type = 'text',
  className = '',
  label = '',
  id = '',
  children,
  ...props
}: FilterInputProps) => {
  return (
    <div className="flex w-full items-center">
      {children}
      <div className="flex flex-col ml-6 w-full">
        <label className="font-medium text-lg mb-2">{label}</label>
        <input
          {...props}
          placeholder={placeholder}
          type="text"
          id={id}
          className={`placeholder-middleGreyLystio placeholder:font-medium placeholder:text-base 
                        outline-none border-b border-b-transparent focus:border-purpleLystio transition 
                        read-only:border-none read-only:bg-transparent read-only:opacity-50 ${className}
                        read-only:cursor-pointer
                    `}
        />
      </div>
    </div>
  );
};

FilterInput.componentName = 'FilterInput';
