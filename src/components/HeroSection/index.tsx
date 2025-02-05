'use client';
import React from 'react';
import { Container } from '@/components';
import SearchFilters from '@/features/SearchFilters';
import { useHeroSection } from './useHeroSection';
import { motion } from 'motion/react';

export const HeroSection = () => {
  const { searchCount, totalCount } = useHeroSection();

  return (
    <div
      className="flex w-full min-h-[calc(100vh-87px)] bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/main_bg.png')",
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`
          text-white 
            xsm:text-5xl xsm:mt-14 xsm:mb-10 xsm:pl-0
            lg:mt-20 lg:mb-14 lg:text-7xl lg:pl-3
            2xl:mt-36 2xl:mb-28
          `}
        >
          Rent faster, Buy smarter
        </motion.h1>
        <SearchFilters />
        <p className="italic text-center text-white mt-28">
          {searchCount || totalCount?.count} verified listings <br></br>for
          apartments, houses, office and more{' '}
        </p>
      </Container>
    </div>
  );
};

HeroSection.componentName = 'HeroSection';
