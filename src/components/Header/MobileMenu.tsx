'use client';
import React, { useState } from 'react';
import { Button, Navigation } from '@/components';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden xsm:flex bg-white w-full p-2 justify-between">
      <Link href="/">
        <Image src="/logo.svg" alt="Lystio logo" width={112} height={53} />
      </Link>
      <Button
        state="active"
        size="small"
        onClick={toggleMenu}
        className={cn(
          'py-2 px-4 transition-transform duration-300 ease-in-out bg-white hover:bg-white shadow-custom',
          isMenuOpen ? 'transform -translate-x-[260px]' : ''
        )}
      >
        <Image
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
              xsm:flex-col 
          `}
        >
          <Button className={`lg:mr-3 xsm:mb-3`}>Log-in</Button>
          <Button state="active">Register</Button>
        </div>
      </motion.div>
    </div>
  );
};

MobileMenu.componentName = 'MobileMenu';
