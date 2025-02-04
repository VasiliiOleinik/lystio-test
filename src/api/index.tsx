import axiosInstance from '@/adapters/axiosInstance';

export async function getHystogramData() {
  const { data } = await axiosInstance.post('/tenement/search/histogram');

  return data;
}
