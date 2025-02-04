'use client';

import { Children } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function QueryClientWrapper({ children }: Children) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
