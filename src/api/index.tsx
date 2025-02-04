import axiosInstance from '@/adapters/axiosInstance';

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
