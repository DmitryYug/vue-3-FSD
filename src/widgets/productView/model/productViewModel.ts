import { createEffect, createEvent, createStore, sample } from "effector";

import type { TProduct } from "@/entities/product";
import { getProductByIdApi } from "@/widgets/productView/api/productViewApi";

export const getProductInfoFx = createEffect((id: string) => getProductByIdApi(id));
export const getProductInfo = createEvent<string>();

export const $product = createStore<TProduct | null>(null);

$product.on(getProductInfoFx.doneData, (_, payload) => payload.data.data);

sample({
  clock: getProductInfo,
  target: getProductInfoFx,
});
