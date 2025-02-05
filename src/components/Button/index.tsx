import { BUTTON_TYPES } from '@/constants';
import { cn } from '@/utils';
import React from 'react';
import { ButtonProps, buttonVariants } from './helpers';

export const Button = ({
  type = BUTTON_TYPES.button,
  state = 'inactive',
  size = 'medium',
  children,
  className = '',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ state, size, className }))}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.componentName = 'Button';
