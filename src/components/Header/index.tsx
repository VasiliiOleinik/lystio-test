import React from 'react';
import Navigation from '../Navigation';
import Button from '../Button';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
};

export default Header;
