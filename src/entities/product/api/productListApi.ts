import type { AxiosResponse } from "axios";

import { api } from "@/shared/api";
import { API_URL } from "@/shared/config";

export const getProductListApi = (): Promise<AxiosResponse> => {
  const request = `${API_URL}/catalog/getAll`;
  return api.get(request);
};
