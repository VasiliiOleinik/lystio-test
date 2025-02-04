import axiosInstance from '@/adapters/axiosInstance';
import { MAPBOX_BASE_URL } from '@/features/LocationFilter/constants';
import axios from 'axios';

export async function getHystogramData() {
  const { data } = await axiosInstance.post('/tenement/search/histogram');

  return data;
}

export async function getCitiesAndDistricts() {
  const { data } = await axiosInstance.get('/geo/boundary/popular');

  return data;
}

export async function getRecentSearch() {
  const { data } = await axiosInstance.get('/geo/search/recent');

  return data;
}

export async function fetchSearchResults(searchTerm: string) {
  if (!searchTerm) return [];

  const { data } = await axios.get(
    `${MAPBOX_BASE_URL}/${encodeURIComponent(searchTerm)}.json`,
    {
      params: {
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY!,
        language: 'de',
        country: 'at',
        types: 'address,district,place,locality,neighborhood,city,street,poi',
      },
    }
  );

  return data.features || [];
}

export async function getSearchCount() {
  const { data } = await axiosInstance.post('/tenement/search/count');

  return data;
}

export async function tenementSearch(query: any) {
  const { data } = await axiosInstance.post('/tenement/search', query);

  return data;
}
