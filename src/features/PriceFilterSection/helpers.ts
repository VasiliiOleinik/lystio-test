import { HystogramDataType } from '@/api/types';
import { GenerateHistogramDataType } from './types';

export function generateHistogramData({
  histogram,
  range,
}: HystogramDataType): GenerateHistogramDataType[] {
  const [min, max] = range;
  const step = (max - min) / histogram.length;

  return histogram.map((count, index) => ({
    price: Math.round(min + index * step),
    count,
  }));
}
