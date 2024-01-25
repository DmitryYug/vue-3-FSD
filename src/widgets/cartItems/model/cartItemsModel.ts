import { createEvent, createStore } from "effector";

import type { TCartItem } from "@/entities/cart";
import { addToCartFx } from "@/feature/productViewControls";

type TOnChangeArgs = {
  item: TCartItem;
  quantity: number;
};

export const changeQuantity = createEvent<TOnChangeArgs>();
export const deleteItem = createEvent<string>();

export const $cartItems = createStore<TCartItem[] | null>(null);

$cartItems
  .on(addToCartFx.doneData, (state, payload) => {
    if (state && payload) {
      return [...state, ...payload.data.data.items];
    } else if (payload && !state) {
      return [...payload.data.data.items];
    } else {
      return null;
    }
  })
  .on(changeQuantity, (state, payload) => {
    if (state) {
      const currentItemIndex = state.findIndex(item => item.id === payload.item.id);
      const updatedItem = { ...state[currentItemIndex], quantity: payload.quantity };
      return [...state.slice(0, currentItemIndex), updatedItem, ...state.slice(currentItemIndex + 1)];
    }
  })
  .on(deleteItem, (state, payload) => {
    if (state) {
      const newState = state.filter(item => item.id !== payload);
      return newState.length ? newState : null;
    }
  });
