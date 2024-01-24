import type { AxiosResponse } from "axios";

import { api } from "@/shared/api";
import { API_URL } from "@/shared/config";

export const getProductByIdApi = (id: string): Promise<AxiosResponse> => {
  const request = `${API_URL}/catalog/get?id=${id}`;
  return api.get(request);
};
