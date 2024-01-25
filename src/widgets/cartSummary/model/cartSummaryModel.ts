import { createEvent, createStore, sample } from "effector";

import type { TCartItem } from "@/entities/cart";
import { $cartItems } from "@/widgets/cartItems";

export const setSummary = createEvent<TCartItem[] | null>();
export const updateValues = createEvent<TCartItem[]>();

export const $totalQuantity = createStore<number | null>(null);
export const $totalPrice = createStore<number | null>(null);

$cartItems.watch(state => setSummary(state));

sample({
  clock: setSummary,
  fn: cartItems => cartItems && cartItems.reduce((acc, val) => acc + val.quantity, 0),
  target: $totalQuantity,
});

sample({
  clock: setSummary,
  fn: cartItems => cartItems && cartItems.reduce((acc, val) => acc + val.product_list_price * val.quantity, 0),
  target: $totalPrice,
});
