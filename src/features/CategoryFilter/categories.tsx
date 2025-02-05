import Image from 'next/image';

export const CATEGORY_OPTIONS = [
  {
    name: 'Apartment',
    value: 'Apartment',
    icon: <Image src="/apartment.svg" alt="Apartment" width={20} height={20} />,
  },
  {
    name: 'House',
    value: 'House',
    icon: <Image src="/house.svg" alt="House" width={22} height={21} />,
  },
  {
    name: 'Rooms/Co-Living',
    value: 'Rooms/Co-Living',
    icon: (
      <Image
        src="/apartment.svg"
        alt="Rooms/Co-Living"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: 'Commercial Properties',
    value: 'Commercial Properties',
    icon: (
      <Image
        src="/commercialProperties.svg"
        alt="Commercial Properties"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: 'New Construction Projects',
    value: 'New Construction Projects',
    icon: (
      <Image
        src="/newConstruction.svg"
        alt="New Construction Projects"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: 'Holiday Homes',
    value: 'Holiday Homes',
    icon: (
      <Image
        src="/holidayHomes.svg"
        alt="Holiday Homes"
        width={21}
        height={19}
      />
    ),
  },
  {
    name: 'Parking',
    value: 'Parking',
    icon: <Image src="/parking.svg" alt="Parking" width={23} height={18} />,
  },
];
