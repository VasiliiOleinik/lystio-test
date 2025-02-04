import { ClassName } from '@/types';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  ClassName & {
    label?: string;
    onChange: (value: string) => void;
    postfix?: string;
  };
