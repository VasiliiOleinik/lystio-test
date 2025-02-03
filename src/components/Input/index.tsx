import React from 'react';

const Input = ({
    placeholder = "",
    type = 'text',
    className = '',
    label = "",
    id="",
    children,
    ...props
}) => {
    return (
       <div className='flex w-full items-center'>
            {children}
            <div className='flex flex-col ml-6 w-full'>
                <label htmlFor={id} className='font-medium text-lg mb-2'>{label}</label>
                <input 
                    {...props}
                    placeholder={placeholder}
                    type="text"
                    id={id}
                    className={`placeholder-lightGreyLystio placeholder:font-medium placeholder:text-base 
                        outline-none border-b border-b-transparent focus:border-purpleLystio transition
                    ${className}`
                    }
                />
            </div>
       </div>
    );
};

export default Input;