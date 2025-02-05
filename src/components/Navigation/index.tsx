import Link from 'next/link';
import React from 'react';

const linkClassName = `text-black text-lg font-medium hover:text-purpleLystio transition-all duration-200 ease-in-out`;

const Navigation = () => {
  return (
    <div
      className={`
      flex lg:items-center lg:gap-11 lg:flex-row lg:mb-0 lg:mt-0
      xsm:flex-col xsm:gap-6 xsm:mt-1 xsm:mb-6 xsm:items-start
    `}
    >
      <Link href="/" className={linkClassName}>
        Rent/Buy
      </Link>
      <Link href="/" className={linkClassName}>
        For Owners
      </Link>
      <Link href="/" className={linkClassName}>
        For Brokers
      </Link>
      <Link href="/" className={linkClassName}>
        About Us
      </Link>
    </div>
  );
};

export default Navigation;
