import Image from 'next/image';

export const TOOGLE_ITEMS = [
  { value: 'rent', name: 'Rent' },
  { value: 'buy', name: 'Buy' },
  {
    value: 'Lystio A.I',
    name: 'Lystio A.I',
    icon: <Image src="/ai.svg" alt="Lystio A.I" width={19} height={20} />,
  },
];
