import Link from 'next/link';
import React from 'react';

const linkClassName = `text-black text-lg font-medium hover:text-purpleLystio transition-all duration-200 ease-in-out`;

const Navigation = () => {
  return (
    <div className="flex items-center gap-11">
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
