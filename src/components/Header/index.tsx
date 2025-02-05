import React from 'react';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
};

Header.componentName = 'Header';
