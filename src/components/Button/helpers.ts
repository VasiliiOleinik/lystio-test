import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'flex items-center justify-center border rounded-1000px font-medium text-base transition-all duration-200 ease-in-out',
  {
    variants: {
      state: {
        active:
          'bg-purpleLystio text-white border-purpleLystio hover:bg-transparent hover:text-black',
        inactive:
          'bg-transparent text-black border-greyLystio hover:bg-purpleLystio hover:text-white',
      },
      size: {
        small: 'py-4 px-2',
        medium: 'py-4 px-16',
      },
    },
    defaultVariants: {
      state: 'inactive',
      size: 'medium',
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
