import React from 'react';
import Navigation from '../Navigation';
import Button from '../Button';

const Header = () => {
    return (
        <div className='flex w-full items-center justify-between p-[12px_9px_17px_42px]'>
            <img src="/logo.svg" alt="Lystio logo" width={112} height={53} />
            <Navigation />
            <div className='flex items-center'>
                <Button className='mr-3'>Log-in</Button>
                <Button state="active">Register</Button>
            </div>
        </div>
    );
};

export default Header;