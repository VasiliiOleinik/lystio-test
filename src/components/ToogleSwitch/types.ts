export type ToggleItem = {
    value: string;
    name: string;
    icon?: React.ReactNode;
  };
  
  export type ToggleSwitchProps = {
    items: ToggleItem[];
    className?: string;
  }