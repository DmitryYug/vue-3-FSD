import { createEvent, createStore, sample } from "effector";

import {
  $chosenAttribute,
  $chosenLabel,
  $product,
  EAttributeType,
  setChosenAttribute,
  setChosenLabel,
} from "@/entities/product";

import { computeActiveSliderIndex } from "../lib";

export const setActive = createEvent();

export const $activeIndex = createStore<number>(0);

$activeIndex.on(setActive, (_, payload) => payload);

$product.watch(product => {
  if (product) {
    const initialValue = product.attributes.find(attr => attr.type === EAttributeType.COLOR);
    if (initialValue) {
      setChosenAttribute(initialValue);
      setChosenLabel(initialValue.labels[0]);
      setActive();
    }
  }
});

sample({
  clock: setActive,
  source: { product: $product, chosenLabel: $chosenLabel, chosenAttribute: $chosenAttribute },
  fn: computeActiveSliderIndex,
  target: $activeIndex,
});
