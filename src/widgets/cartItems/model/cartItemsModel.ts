import { createStore } from "effector";

import type { TCartItem } from "@/entities/cart";
import { addToCartFx } from "@/feature/productViewControls";

export const $cartItems = createStore<TCartItem[] | null>(null);

$cartItems.on(addToCartFx.doneData, (state, payload) => {
  if (state && payload) {
    return [...state, ...payload.data.data.items];
  } else if (payload && !state) {
    return [...payload.data.data.items];
  } else {
    return null;
  }
});
