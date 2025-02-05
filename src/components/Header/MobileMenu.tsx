'use client';
import React, { useState } from 'react';
import Navigation from '../Navigation';
import Button from '../Button';
import { motion } from 'motion/react';
import { cn } from '@/utils';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="lg:hidden sm:flex bg-white w-full p-2 justify-between">
      <img src="/logo.svg" alt="Lystio logo" width={112} height={53} />
      <Button
        state="active"
        size="small"
        onClick={toggleMenu}
        className={cn(
          'py-2 px-4 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'transform -translate-x-[260px]' : ''
        )}
      >
        <img
          src="/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          className={cn(
            'transition-transform duration-300 ease-in-out transform',
            isMenuOpen ? 'rotate-90' : 'rotate-0'
          )}
        />
      </Button>
      <motion.div
        className={`flex bg-white w-[250px] flex-col fixed right-0 top-0 h-full p-6 z-50 ${isMenuOpen ? 'shadow-xl' : 'shadow-md'}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Navigation />
        <div
          className={`
              flex items-center lg:flex-row
              sm:flex-col 
          `}
        >
          <Button className={`lg:mr-3 sm:mb-3`}>Log-in</Button>
          <Button state="active">Register</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
