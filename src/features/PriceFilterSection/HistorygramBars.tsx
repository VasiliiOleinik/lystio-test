import React from 'react';
import { HistorygramBarsProps } from './types';

const HistorygramBars = ({
  histogramBars,
  maxHistogramValue,
}: HistorygramBarsProps) => {
  return (
    <div className="relative w-full h-20 flex items-end">
      {histogramBars.map((bar, idx) => (
        <div
          key={idx}
          style={{
            height: `${(bar.count / maxHistogramValue) * 100}%`,
            width: '4%',
            backgroundColor: bar.isActive ? '#A855F7' : '#EEE7FF',
            transition: 'background-color 0.2s',
          }}
          className="mr-[2px]"
        ></div>
      ))}
    </div>
  );
};

export default HistorygramBars;
