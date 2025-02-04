import { LocationType } from '@/types';

export type HystogramDataType = {
  range: number[];
  histogram: number[];
};

export type DistrictsType = LocationType & {
  postal_code: string;
};

export type CitiesAndDistrictsType = LocationType & {
  children: DistrictsType[];
};

export type SearchCountType = {
  count: number;
};

export type PagingType = {
  page: number;
  pageCount: number;
  pageSize: number;
  totalCount: number;
};

export type TenementSearchType = {
  paging: PagingType;
  res: any[];
};

export type TenementSearchQueryProps = {
  withinId: string;
  rentType: string;
  type: string;
  rent: number[];
};
