import { create } from 'zustand';

interface FiltersState {
  minPrice: number;
  maxPrice: number;
  category: string;
  location: {
    id: string;
    name: string;
  };
  locationName: string;
  rentType: string;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setCategory: (category: string) => void;
  setLocation: (location: string) => void;
  setRentType: (rentType: string) => void;
  setLocationName: (locationName: string) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  minPrice: 0,
  maxPrice: 100000,
  category: '',
  location: {
    id: '',
    name: '',
  },
  rentType: '',
  locationName: '',
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setCategory: (category) => set({ category }),
  setLocation: (location) => set({ location }),
  setRentType: (rentType) => set({ rentType }),
  setLocationName: (locationName) => set({ locationName }),
}));
