import React from 'react';
import Navigation from '../Navigation';
import Button from '../Button';

const DesktopMenu = () => {
  return (
    <>
      <div
        className={`lg:flex bg-white w-full items-center justify-between p-[12px_9px_17px_42px] flex-row xsm:hidden`}
      >
        <img src="/logo.svg" alt="Lystio logo" width={112} height={53} />
        <Navigation />
        <div
          className={`
            flex items-center lg:flex-row
            xsm:flex-col 
        `}
        >
          <Button className={`lg:mr-3 lg:mb-0 xsm:mb-3 xsm:mr-0`}>
            Log-in
          </Button>
          <Button state="active">Register</Button>
        </div>
      </div>
    </>
  );
};

export default DesktopMenu;
