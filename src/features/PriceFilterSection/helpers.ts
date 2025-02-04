export const generateHistogramData = ({ histogram, range }) => {
  const [min, max] = range;
  const step = (max - min) / histogram.length;

  return histogram.map((count, index) => ({
    price: Math.round(min + index * step),
    count,
  }));
};
