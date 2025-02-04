export type UseFilters = {
  searchParams: URLSearchParams | null;
  setFilters: (item: SetFiltersProps) => void;
};

export type SetFiltersProps = {
  rentType: string;
  category: string;
  location: string | number;
  minPrice: number;
  maxPrice: number;
  locationName: string;
};

export type UseClickOutsideProps = {
  ref: React.RefObject<HTMLElement | null>;
  callback: () => void;
};
