export type UseFilters = {
  searchParams: URLSearchParams | null;
  setFilters: (key: string, value: string | number | null) => void;
};
