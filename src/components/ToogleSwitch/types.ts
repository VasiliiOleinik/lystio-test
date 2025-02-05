import { ClassName } from '@/types';

type ToggleItem = {
  value: string;
  name: string;
  icon?: React.ReactNode;
};

export type ToggleSwitchProps = ClassName & {
  items: ToggleItem[];
  onChange: (value: string) => void;
  deafultValue?: string;
};

export type UseToggleSwitchProps = {
  items: ToggleItem[];
  deafultValue?: string;
};
