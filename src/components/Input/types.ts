import { ClassName } from '@/types';

export type InputProps = ClassName &
  HTMLInputElement & {
    label?: string;
    onChange: (value: string) => void;
    postfix?: string;
  };
