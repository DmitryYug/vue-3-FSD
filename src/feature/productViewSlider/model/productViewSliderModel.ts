import { createEvent, createStore, sample } from "effector";

import { $product, EAttributeType } from "@/entities/product";
import { $chosenAttribute, $chosenLabel, setChosenAttribute, setChosenLabel } from "@/feature/productViewControls";

import { computeActiveSliderIndex } from "../lib";

export const setActiveSliderIndex = createEvent();
export const sliderDotOnClick = createEvent<number>();

export const $activeIndex = createStore<number>(0);

$activeIndex.on(sliderDotOnClick, (_, payload) => payload);

$product.watch(product => {
  if (product) {
    const initialValue = product.attributes.find(attr => attr.type === EAttributeType.COLOR);
    if (initialValue) {
      setChosenAttribute(initialValue);
      setChosenLabel(initialValue.labels[0]);
      setActiveSliderIndex();
    }
  }
});

sample({
  clock: setActiveSliderIndex,
  source: { product: $product, chosenLabel: $chosenLabel, chosenAttribute: $chosenAttribute },
  fn: computeActiveSliderIndex,
  target: $activeIndex,
});

sample({
  clock: setChosenLabel,
  source: $chosenAttribute,
  filter: attribute => {
    if (attribute) {
      return attribute.type === EAttributeType.COLOR;
    }
    return false;
  },
  target: setActiveSliderIndex,
});
