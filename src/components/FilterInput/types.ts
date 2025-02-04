import { Children } from '@/types';

export type FilterInputProps = HTMLInputElement &
  Children & {
    label: string;
  };
