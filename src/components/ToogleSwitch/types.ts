import { ClassName } from '@/types';

export type ToggleItem = {
  value: string;
  name: string;
  icon?: React.ReactNode;
};

export type ToggleSwitchProps = ClassName & {
  items: ToggleItem[];
};
