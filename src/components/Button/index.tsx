import { BUTTON_TYPES } from '@/constants';
import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
    "flex items-center justify-center border rounded-1000px font-medium text-base transition-all duration-200 ease-in-out",
    {
      variants: {
        state: {
          active: "bg-purpleLystio text-white border-purpleLystio hover:bg-transparent hover:text-black",
          inactive: "bg-transparent text-black border-greyLystio hover:bg-purpleLystio hover:text-white",
        },
        size: {
          small: "py-6 px-2",
          medium: "py-6 px-16",
        },
      },
      defaultVariants: {
        state: "inactive",
        size: "medium",
      },
    }
  );

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

const Button = ({
    type = BUTTON_TYPES.buttom,
    isActive = false, 
    children,
    className = '',
    ...rest
    }) => {
    return (
        <button 
           className={cn(
                `flex items-center justify-center border py-6 px-16 rounded-1000px 
                font-medium text-base transition-all duration-200 ease-in-out text-greyLystio border-greyLystio`,
                isActive ? "bg-purpleLystio text-white border-purpleLystio" : 'bg-transparent text-black border-greyLystio',
                isActive ? 'hover:bg-transparent hover:text-black' : 'hover:bg-purpleLystio hover:text-white',
                `${className}`,
            )}
            type={type} {...rest}>
            {children}
        </button>
    );
};

export default Button;

