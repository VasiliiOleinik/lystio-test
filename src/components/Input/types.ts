import { Children } from '@/types';

export type InputProps = HTMLInputElement &
  Children & {
    label: string;
  };
