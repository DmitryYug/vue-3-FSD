import { createEffect, createEvent, createStore, sample } from "effector";

import { getProductListApi } from "@/entities/product/api";
import type { TProduct } from "@/entities/product/model/types";

export const getProductListFx = createEffect(() => getProductListApi());

export const getProductList = createEvent();

export const $productList = createStore<TProduct[] | null>(null);

$productList.on(getProductListFx.doneData, (_, payload) => payload.data.data);

sample({
  clock: getProductList,
  target: getProductListFx,
});
