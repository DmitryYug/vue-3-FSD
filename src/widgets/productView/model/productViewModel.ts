import { createEffect, createEvent, createStore, sample } from "effector";

import type { TAttribute, TAttributeLabel, TProduct } from "@/entities/product";
import { getProductByIdApi } from "@/widgets/productView/api/productViewApi";
import { computeAvailableVariants } from "@/widgets/productView/lib/computeAvailableVariants";

export const getProductInfoFx = createEffect((id: string) => getProductByIdApi(id));
export const getProductInfo = createEvent<string>();
export const setChosenLabel = createEvent<TAttributeLabel | null>();
export const setChosenAttribute = createEvent<TAttribute | null>();

export const $product = createStore<TProduct | null>(null);
export const $chosenLabel = createStore<TAttributeLabel | null>(null);
export const $chosenAttribute = createStore<TAttribute | null>(null);
export const $availableVariants = createStore<Record<number, number[]> | null>(null);

$product.on(getProductInfoFx.doneData, (_, payload) => payload.data.data);
$chosenLabel.on(setChosenLabel, (_, payload) => payload);
$chosenAttribute.on(setChosenAttribute, (_, payload) => payload);
sample({
  clock: getProductInfo,
  target: getProductInfoFx,
});

sample({
  clock: setChosenLabel,
  source: $product,
  fn: computeAvailableVariants,
  target: $availableVariants,
});
