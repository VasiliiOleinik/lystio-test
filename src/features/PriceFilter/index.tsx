import Input from '@/components/Input';
import React from 'react';

const PriceFilter = () => {
    return (
        <>
            <Input 
                placeholder='Select Price Range'
                label="Price">
                <img src="/price.svg" alt="Price" />
            </Input>
        </>
    );
};

export default PriceFilter;