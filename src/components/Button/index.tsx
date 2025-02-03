import { BUTTON_TYPES } from '@/constants';
import { cn } from '@/utils';
import React from 'react';
import { ButtonProps, buttonVariants } from './helpers';


const Button = ({
    type = BUTTON_TYPES.buttom,
    state = "inactive", 
    size = "medium",
    children,
    className = '',
    ...rest
    }: ButtonProps) => {
    return (
    <button className={cn(buttonVariants({ state, size, className }))} type={type} {...rest}>
        {children}
    </button>
    );
};

export default Button;

