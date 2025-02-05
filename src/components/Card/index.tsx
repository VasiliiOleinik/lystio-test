import { motion } from 'motion/react';
import React from 'react';
import { AnimatedCardProps } from './types';

const AnimatedCard = ({
  children,
  className = '',
  ...rest
}: AnimatedCardProps) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`
          py-8 px-4 rounded-xl bg-white shadow-custom lg:absolute lg:top-[calc(100%+25px)] lg:min-w-fit lg:mt-0
          xsm:relative xsm:top-0 xsm:w-full xsm:mt-2
          ${className}
        `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
