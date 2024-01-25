<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import type { DropdownChangeEvent } from "primevue/dropdown";

import { type TProduct } from "@/entities/product";
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
} from "@/entities/product";
import { DeleteIcon } from "@/shared/assets";
import { Badge, QuantityInput, TheButton } from "@/shared/ui";

const { product, clearData } = defineProps<{ product: TProduct; clearData: () => void }>();

const chosenLabel = useStore($chosenLabel);
const chosenAttribute = useStore($chosenAttribute);
const availableVariants = useStore($availableVariants);
const labelIdsForVariantCheck = useStore($labelIdsForVariantCheck);
const chosenVariant = useStore($chosenVariant);
const quantity = useStore($quantity);
</script>

<template>
  <div class="controls">
    <div
      v-for="attribute in product.attributes"
      :key="attribute.id"
    >
      <div class="controls-item">
        <Dropdown
          show-clear
          panel-class="dropdown-panel"
          optionLabel="title"
          :model-value="chosenLabel"
          :options="attribute.labels"
          :placeholder="`Select ${attribute.title}`"
          @change="
            (event: DropdownChangeEvent) => {
              setChosenAttribute(attribute);
              setChosenLabel(event.value);
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
      >
        <button
          v-for="availableLabel in attribute.labels.filter(
            label => availableVariants && availableVariants[attribute.id].includes(label.id)
          )"
          :key="availableLabel.title"
          @click="() => setLabelIdForVariantCheck({ attributeId: attribute.id, labelId: availableLabel.id })"
        >
          <Badge
            v-if="labelIdsForVariantCheck"
            size="small"
            :badge-text="availableLabel.title"
            :is-opacity="
              chosenLabel.id === availableLabel.id || labelIdsForVariantCheck[attribute.id] === availableLabel.id
            "
          />
        </button>
      </div>
    </div>
    <QuantityInput
      :model="quantity"
      :on-change="setQuantity"
    />
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
