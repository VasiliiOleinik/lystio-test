export type UseFilters = {
    searchParams: URLSearchParams | null;
    setFilter: (key: string, value: string | number | null) => void;
}