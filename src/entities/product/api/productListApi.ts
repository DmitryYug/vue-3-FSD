import type { AxiosResponse } from 'axios'
import { API_URL } from '@/shared/config'
import { api } from '@/shared/api'

export const getProductListApi = (): Promise<AxiosResponse> => {
  const request = `${API_URL}/catalog/getAll`
  return api.get(request);
};
