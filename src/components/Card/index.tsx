import { motion } from 'motion/react';
import React from 'react';
import { CardProps } from './types';

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <motion.div
      {...rest}
      className={`py-8 px-4 rounded-xl bg-white shadow-custom ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
