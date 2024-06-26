import { createEffect, createEvent, createStore, sample } from "effector";

import type { TAttribute, TAttributeLabel, TProduct, TVariant } from "@/entities/product";
import { $product, addProductToCartApi } from "@/entities/product";

import { computeAvailableVariants, computeVariant } from "../lib";

export const addToCartFx = createEffect((payload: { variantId: string; quantity: number } | null) => {
  if (payload) {
    const { variantId, quantity } = payload;
    return addProductToCartApi(variantId, quantity);
  }
});

export const setChosenLabel = createEvent<TAttributeLabel | null>();
export const setChosenAttribute = createEvent<TAttribute | null>();
export const setLabelIdForVariantCheck = createEvent<{ attributeId: string; label: TAttributeLabel }>();
export const setVariant = createEvent<{
  product: TProduct | null;
  chosenAttributes: Record<string, TAttributeLabel> | null;
} | null>();
export const setQuantity = createEvent<number>();
export const addToCart = createEvent();

export const $chosenLabel = createStore<TAttributeLabel | null>(null);
export const $chosenAttribute = createStore<TAttribute | null>(null);
export const $availableVariants = createStore<Record<string, string[]> | null>(null);
export const $labelIdsForVariantCheck = createStore<Record<string, TAttributeLabel> | null>(null);
export const $chosenVariant = createStore<TVariant | null>(null);
export const $quantity = createStore<number>(0);

$chosenLabel.on(setChosenLabel, (_, payload) => {
  console.log("$chosenLabel:", payload);
  return payload;
});
$chosenAttribute.on(setChosenAttribute, (_, payload) => {
  console.log("$chosenAttribute:", payload);
  return payload;
});
$chosenVariant.on(setVariant, (_, payload) => payload && computeVariant(payload));
$quantity.on(setQuantity, (_, payload) => payload);

sample({
  clock: addToCart,
  source: { chosenVariant: $chosenVariant, quantity: $quantity },
  fn: ({ chosenVariant, quantity }) => {
    return chosenVariant
      ? {
          variantId: chosenVariant.id,
          quantity,
        }
      : null;
  },
  target: addToCartFx,
});

sample({
  clock: setChosenLabel,
  source: $product,
  fn: computeAvailableVariants,
  target: $availableVariants,
});

sample({
  clock: setChosenLabel,
  source: $chosenAttribute,
  fn: (attribute, label) => {
    if (attribute && label) {
      return { [attribute.id]: label };
    }
    return null;
  },
  target: $labelIdsForVariantCheck,
});

sample({
  clock: setLabelIdForVariantCheck,
  source: $labelIdsForVariantCheck,
  fn: (labelIdsForVariantCheck, attributeIdLabelIdRecord) => {
    if (labelIdsForVariantCheck && attributeIdLabelIdRecord) {
      const res = { ...labelIdsForVariantCheck };
      res[attributeIdLabelIdRecord.attributeId] = attributeIdLabelIdRecord.label;
      return res;
    }
    return null;
  },
  target: $labelIdsForVariantCheck,
});

sample({
  clock: $labelIdsForVariantCheck,
  source: $product,
  filter: (product, chosenAttributes) => {
    if (product && chosenAttributes) {
      return product.attributes.length === Object.keys(chosenAttributes).length;
    }
    return false;
  },
  fn: (product, chosenAttributes) => {
    return { product, chosenAttributes };
  },
  target: setVariant,
});
