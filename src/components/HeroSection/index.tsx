import React from 'react';
import Container from '../Container';
import SearchFilters from '@/features/SearchFilters';

const HeroSection = () => {
  return (
    <div
      className="d-flex w-full min-h-[calc(100vh-87px)] bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/main_bg.png')",
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <h1 className="mt-36 mb-28 text-white text-7xl pl-3">
          Rent faster, Buy smarter
        </h1>
        <SearchFilters />
        <p className="italic text-center text-white mt-28">
          73,278 verified listings <br></br>for apartments, houses, office and
          more{' '}
        </p>
      </Container>
    </div>
  );
};

export default HeroSection;
