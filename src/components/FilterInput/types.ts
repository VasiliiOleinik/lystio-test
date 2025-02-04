import { Children } from '@/types';

export type FilterInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Children & {
    label: string;
  };
