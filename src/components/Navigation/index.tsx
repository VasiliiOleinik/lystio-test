import Link from 'next/link';
import React from 'react';
import { NAVIGATION_LINKS } from './constants';

const linkClassName = `text-black text-lg font-medium hover:text-purpleLystio transition-all duration-200 ease-in-out`;

export const Navigation = () => {
  return (
    <div
      className={`
      flex lg:items-center lg:gap-11 lg:flex-row lg:mb-0 lg:mt-0
      xsm:flex-col xsm:gap-6 xsm:mt-1 xsm:mb-6 xsm:items-start
    `}
    >
      {NAVIGATION_LINKS.map((link) => (
        <Link key={link.name} href={link.href} className={linkClassName}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

Navigation.componentName = 'Navigation';
