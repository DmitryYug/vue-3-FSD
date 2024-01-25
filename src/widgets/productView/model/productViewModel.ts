import { createEffect, createEvent, createStore, sample } from "effector";

import type { TAttribute, TAttributeLabel, TProduct, TVariant } from "@/entities/product";
import { getProductByIdApi } from "@/widgets/productView/api/productViewApi";
import { computeAvailableVariants } from "@/widgets/productView/lib/computeAvailableVariants";
import { computeVariant } from "@/widgets/productView/lib/computeVariant";

export const getProductInfoFx = createEffect((id: string) => getProductByIdApi(id));
export const getProductInfo = createEvent<string>();
export const setChosenLabel = createEvent<TAttributeLabel | null>();
export const setChosenAttribute = createEvent<TAttribute | null>();
export const setLabelIdForVariantCheck = createEvent<{ attributeId: string; labelId: string }>();
export const getVariant = createEvent<{ product: TProduct | null; chosenAttributes: Record<string, string> | null }>();

export const $product = createStore<TProduct | null>(null);
export const $chosenLabel = createStore<TAttributeLabel | null>(null);
export const $chosenAttribute = createStore<TAttribute | null>(null);
export const $availableVariants = createStore<Record<string, string[]> | null>(null);
export const $labelIdsForVariantCheck = createStore<Record<string, string> | null>(null);
export const $chosenVariant = createStore<TVariant | null>(null);

$product.on(getProductInfoFx.doneData, (_, payload) => payload.data.data);
$chosenLabel.on(setChosenLabel, (_, payload) => payload);
$chosenAttribute.on(setChosenAttribute, (_, payload) => payload);
$chosenVariant.on(getVariant, (_, payload) => computeVariant(payload));

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

sample({
  clock: setChosenLabel,
  source: $chosenAttribute,
  fn: (attribute, label) => {
    if (attribute && label) {
      return { [attribute.id]: label.id };
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
      res[attributeIdLabelIdRecord.attributeId] = attributeIdLabelIdRecord.labelId;
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
  target: getVariant,
});
