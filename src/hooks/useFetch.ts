import { useQuery } from '@tanstack/react-query';

import { api } from './../services/api';
export const useFetch = (key: string, url: string) => {
  const response = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get(url);
      return data;
    }
  });
  return response;
};
