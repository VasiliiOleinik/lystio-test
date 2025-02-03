"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UseFilters } from "./types";

const useFilters = (): UseFilters => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [params, setParams] = useState(new URLSearchParams());

  useEffect(() => {
    setParams(new URLSearchParams(searchParams?.toString() || ''));
  }, [searchParams]);

  const setFilter = (key: string, value: string | number | null) => {
    const newParams = new URLSearchParams(params.toString());
    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }
    router.push(`?${newParams.toString()}`);
  };

  return { searchParams, setFilter };
};

export default useFilters;
