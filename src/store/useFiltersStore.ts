import { LocationType } from '@/types';
import { create } from 'zustand';

interface FiltersState {
  minPrice: number;
  maxPrice: number;
  category: string;
  location: LocationType;
  locationName: string;
  rentType: string;
  searchCount: number;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setCategory: (category: string) => void;
  setLocation: (location: LocationType) => void;
  setRentType: (rentType: string) => void;
  setLocationName: (locationName: string) => void;
  setSearchCount: (searchCount: number) => void;
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
  searchCount: 0,
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setCategory: (category) => set({ category }),
  setLocation: (location) => set({ location }),
  setRentType: (rentType) => set({ rentType }),
  setLocationName: (locationName) => set({ locationName }),
  setSearchCount: (searchCount) => set({ searchCount }),
}));
