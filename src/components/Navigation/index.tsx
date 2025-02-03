import Link from 'next/link';
import React from 'react';

const linkClassName = `text-black text-lg font-medium hover:text-purpleLystio transition-all duration-200 ease-in-out`;

const Navigation = () => {
    return (
        <div className='flex items-center gap-11'>
            <Link href="/about" className={linkClassName}>Rent/Buy</Link>
            <Link href="/about" className={linkClassName}>For Owners</Link>
            <Link href="/about" className={linkClassName}>For Brokers</Link>
            <Link href="/about" className={linkClassName}>About Us</Link>
        </div>
    );
};

export default Navigation;