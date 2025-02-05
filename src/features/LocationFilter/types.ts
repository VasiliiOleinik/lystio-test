import { CitiesAndDistrictsType, DistrictsType } from '@/api/types';
import { LocationType } from '@/types';

export type RecentLocationsType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recentSearch: any[];
  handleDistrictSelect: (districtId: DistrictsType) => void;
  selectedDistrict: string;
};

export type DistrictsComponentType = {
  city: CitiesAndDistrictsType;
  handleDistrictSelect: (district: DistrictsType) => void;
  selectedDistrict: string;
};

export type CitiesComponentType = {
  citiesAndDistricts: CitiesAndDistrictsType[];
  handleCitySelect: (city: LocationType) => void;
  selectedCity: string;
};
