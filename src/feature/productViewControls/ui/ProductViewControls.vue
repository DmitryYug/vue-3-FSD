<script setup lang="ts">
import { computed, onUnmounted } from "vue";
import { useStore } from "effector-vue/composition";
import type { DropdownChangeEvent } from "primevue/dropdown";

import { type TAttribute, type TAttributeLabel, type TProduct } from "@/entities/product";
import {
  $availableVariants,
  $chosenAttribute,
  $chosenLabel,
  $chosenVariant,
  $labelIdsForVariantCheck,
  $quantity,
  addToCart,
  setChosenAttribute,
  setChosenLabel,
  setLabelIdForVariantCheck,
  setQuantity,
  setVariant,
} from "@/feature/productViewControls";
import { DeleteIcon } from "@/shared/assets";
import { QuantityInput, TheButton } from "@/shared/ui";

const { product } = defineProps<{ product: TProduct }>();

const chosenLabel = useStore($chosenLabel);
const chosenAttribute = useStore($chosenAttribute);
const availableVariants = useStore($availableVariants);
const labelIdsForVariantCheck = useStore($labelIdsForVariantCheck);
const chosenVariant = useStore($chosenVariant);
const quantity = useStore($quantity);

onUnmounted(() => {
  clearData();
});

const clearData = () => {
  setChosenAttribute(null);
  setChosenLabel(null);
  setVariant(null);
  setQuantity(0);
};

const computeModelValue = (attribute: TAttribute) => {
  if (chosenLabel.value && labelIdsForVariantCheck.value) {
    const { value: attributeValue } = chosenAttribute;
    const { value: labelsToCheck } = labelIdsForVariantCheck;
    if (attributeValue) {
      console.log(attribute.id === attributeValue.id ? chosenLabel : labelsToCheck[attribute.id]);
      return attribute.id === attributeValue.id ? chosenLabel.value : labelsToCheck[attribute.id];
    }
  }
};

const computeErrorMessage = computed(() => {
  return chosenVariant.value && Object.keys(chosenVariant.value).length === 1 ? chosenVariant.value?.title : "";
});
</script>

<template>
  <div class="controls">
    <div
      v-for="attribute in product.attributes"
      :key="attribute.id"
    >
      <div class="controls-item">
        <Dropdown
          panel-class="dropdown-panel"
          optionLabel="title"
          :model-value="computeModelValue(attribute)"
          :options="attribute.labels"
          :placeholder="`Select ${attribute.title}`"
          :option-disabled="
            (option: TAttributeLabel) =>
              availableVariants &&
              availableVariants[attribute.id] &&
              !availableVariants[attribute.id].includes(option.id)
          "
          @change="
            (event: DropdownChangeEvent) => {
              if (!chosenAttribute) {
                setChosenAttribute(attribute);
                setChosenLabel(event.value);
              } else {
                setLabelIdForVariantCheck({ attributeId: attribute.id, label: event.value });
              }
            }
          "
        />
        <button
          v-if="chosenAttribute"
          @click="clearData"
        >
          <DeleteIcon v-if="chosenAttribute.id === attribute.id" />
        </button>
      </div>
      <div
        v-if="chosenLabel && availableVariants && availableVariants[attribute.id]"
        class="variants-wrapper"
      ></div>
    </div>
    <QuantityInput
      :model="quantity"
      :on-change="setQuantity"
    />
    <span class="error">
      {{ computeErrorMessage }}
    </span>
    <TheButton
      :on-click="addToCart"
      :disabled="!chosenVariant || quantity === 0"
      title="Add to Cart"
    />
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
