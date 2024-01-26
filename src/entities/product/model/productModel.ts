import { createEffect, createEvent, createStore, sample } from "effector";

import type { TProduct } from "@/entities/product";

import { getProductByIdApi } from "../api";

export const getProductInfoFx = createEffect((id: string) => getProductByIdApi(id));

export const getProductInfo = createEvent<string>();
export const setError = createEvent<boolean>();

export const $product = createStore<TProduct | null>(null);
export const $apiError = createStore<boolean>(false);

$product.on(getProductInfoFx.doneData, (_, payload) => payload.data.data);
$apiError.on(getProductInfoFx.fail, (_, payload) => !!payload).on(setError, (_, payload) => payload);
sample({
  clock: getProductInfo,
  target: getProductInfoFx,
});
