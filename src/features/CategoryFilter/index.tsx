import Input from '@/components/Input';
import React from 'react';

const CategoryFilter = () => {
    return (
        <>
            <Input 
                placeholder='Select Category'
                label="Category">
                <img src="/category.svg" alt="Category" />
            </Input>
        </>
    );
};

export default CategoryFilter;