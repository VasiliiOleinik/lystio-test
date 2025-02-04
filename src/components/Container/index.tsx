import { Children } from '@/types';
import React from 'react';

const Container = ({ children }: Children) => {
  return (
    <div className="flex flex-col max-w-[1630px] w-full px-6 m-[0_auto]">
      {children}
    </div>
  );
};

export default Container;
