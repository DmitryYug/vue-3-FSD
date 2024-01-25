import type { AxiosResponse } from "axios";

import { api } from "@/shared/api";
import { API_URL } from "@/shared/config";

export const getProductByIdApi = (id: string): Promise<AxiosResponse> => {
  const request = `${API_URL}/catalog/get?id=${id}`;
  return api.get(request);
};

export const addProductToCart = (variantId: string, quantity: number): Promise<AxiosResponse> => {
  const request = `${API_URL}/cart/add?variant_id=${variantId}&quantity=${quantity}`;
  return api.post(request);
};
