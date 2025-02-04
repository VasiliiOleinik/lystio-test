export type GenerateHistogramDataType = {
  count: number;
  price: number;
};

export type PriceInputsProps = {
  setValues: (value: number[]) => void;
  values: number[];
};

export type HistorygramBarsType = {
  count: number;
  isActive: boolean;
  barMin: number;
  barMax: number;
};

export type HistorygramBarsProps = {
  histogramBars: HistorygramBarsType[];
  maxHistogramValue: number;
};
