import type { TVariant } from "@/entities/product";

export type TCartItem = {
  id: string;
  name: string;
  price: number;
  product_id: string;
  product_list_price: number;
  product_type: string;
  quantity: number;
  total_price: number;
  variant: TVariant;
};
