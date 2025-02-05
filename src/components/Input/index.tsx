import React from 'react';
import { InputProps } from './types';

export const Input = ({
  label = '',
  type = 'text',
  onChange,
  value,
  className,
  postfix = '€',
}: InputProps) => {
  return (
    <div className="flex flex-col w-full relative">
      {!!label && <label className="mb-2">{label}</label>}
      <input
        type={type}
        className={`border border-lightPurpleLystio2 rounded-md text-left h-12 px-3
             focus:border-purpleLystio transition-all outline-none ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {!!postfix && (
        <span className="absolute right-4 top-[calc(50%+1px)] font-medium text-lg">
          {postfix}
        </span>
      )}
    </div>
  );
};

Input.componentName = 'Input';
