import React from 'react';
import { Button, Navigation } from '@/components';
import Link from 'next/link';
import Image from 'next/image';

export const DesktopMenu = () => {
  return (
    <>
      <div
        className={`lg:flex bg-white w-full items-center justify-between p-[12px_9px_17px_42px] flex-row xsm:hidden`}
      >
        <Link href="/">
          <Image src="/logo.svg" alt="Lystio logo" width={112} height={53} />
        </Link>
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

DesktopMenu.componentName = 'DesktopMenu';
