'use client';
import React from 'react';
import Container from '../Container';
import SearchFilters from '@/features/SearchFilters';
import { useHeroSection } from './useHeroSection';

const HeroSection = () => {
  const { searchCount, totalCount } = useHeroSection();

  return (
    <div
      className="d-flex w-full min-h-[calc(100vh-87px)] bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/main_bg.png')",
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <h1
          className={`
          text-white text-7xl pl-3
            lg:mt-20 lg:mb-14
            2xl:mt-36 2xl:mb-28
          `}
        >
          Rent faster, Buy smarter
        </h1>
        <SearchFilters />
        <p className="italic text-center text-white mt-28">
          {searchCount || totalCount?.count} verified listings <br></br>for
          apartments, houses, office and more{' '}
        </p>
      </Container>
    </div>
  );
};

export default HeroSection;
