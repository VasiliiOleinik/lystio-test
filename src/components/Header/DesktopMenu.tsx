import React from 'react';
import Navigation from '../Navigation';
import Button from '../Button';

const DesktopMenu = () => {
  return (
    <>
      <div
        className={`lg:flex bg-white w-full items-center justify-between p-[12px_9px_17px_42px] flex-row sm:hidden`}
      >
        <img src="/logo.svg" alt="Lystio logo" width={112} height={53} />
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
      </div>
    </>
  );
};

export default DesktopMenu;
