import { createEffect, createEvent, createStore, sample } from "effector";

import { getProductListApi } from "@/entities/product/api";

export const getProductListFx = createEffect(() => getProductListApi());

export const getProductList = createEvent();

//todo fix any
export const $productList = createStore<any>(null);

$productList.on(getProductListFx.doneData, (_, payload) => payload.data);

sample({
  clock: getProductList,
  target: getProductListFx,
});
