import axiosInstance from '@/adapters/axiosInstance';
import { MAPBOX_BASE_URL } from '@/features/LocationFilter/constants';
import axios from 'axios';
import {
  CitiesAndDistrictsType,
  HystogramDataType,
  SearchCountType,
  TenementSearchQueryProps,
  TenementSearchType,
} from './types';
import { LocationType } from '@/types';

export async function getHystogramData(): Promise<HystogramDataType> {
  const { data } = await axiosInstance.post('/tenement/search/histogram');

  return data;
}

export async function getCitiesAndDistricts(): Promise<
  CitiesAndDistrictsType[]
> {
  const { data } = await axiosInstance.get('/geo/boundary/popular');

  return data;
}

export async function getRecentSearch(): Promise<LocationType[]> {
  const { data } = await axiosInstance.get('/geo/search/recent');

  return data;
}

export async function fetchSearchResults(searchTerm: string): Promise<any> {
  const { data } = await axios.get(
    `${MAPBOX_BASE_URL}/${encodeURIComponent(searchTerm)}.json`,
    {
      params: {
        access_token: process.env.NEXT_PUBLIC_MAPBOX_KEY!,
        language: 'de',
        country: 'at',
        types: 'address,district,place,locality,neighborhood,postcode',
      },
    }
  );

  return data.features[0] || [];
}

export async function getAddressFromCoords(
  lat: number,
  lon: number
): Promise<string | null> {
  try {
    const { data } = await axios.get(`${MAPBOX_BASE_URL}/${lon},${lat}.json`, {
      params: {
        access_token: process.env.NEXT_PUBLIC_MAPBOX_KEY!,
        language: 'de',
        country: 'at',
        types: 'address,place,locality,neighborhood',
      },
    });

    return data.features?.[0]?.place_name || null;
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
}

export async function getSearchCount(): Promise<SearchCountType> {
  const { data } = await axiosInstance.post('/tenement/search/count');

  return data;
}

export async function tenementSearch(
  query: TenementSearchQueryProps
): Promise<TenementSearchType> {
  const { data } = await axiosInstance.post('/tenement/search', query);

  return data;
}
