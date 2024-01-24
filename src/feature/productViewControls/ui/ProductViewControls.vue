<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import type { DropdownChangeEvent } from "primevue/dropdown";

import { type TProduct } from "@/entities/product";
import { DeleteIcon, Minus, Plus } from "@/shared/assets";
import { Badge } from "@/shared/ui";
import {
  $availableVariants,
  $chosenAttribute,
  $chosenLabel,
  setChosenAttribute,
  setChosenLabel,
} from "@/widgets/productView";

const { product } = defineProps<{ product: TProduct }>();

const chosenLabel = useStore($chosenLabel);
const chosenAttribute = useStore($chosenAttribute);
const availableVariants = useStore($availableVariants);
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
          :model-value="chosenLabel"
          :options="attribute.labels"
          :disabled="!!chosenLabel"
          :placeholder="`Select ${attribute.title}`"
          @change="
            (event: DropdownChangeEvent) => {
              setChosenLabel(event.value);
              setChosenAttribute(attribute);
            }
          "
        />
        <button
          v-if="chosenAttribute"
          @click="
            () => {
              setChosenLabel(null);
              setChosenAttribute(null);
            }
          "
        >
          <DeleteIcon v-if="chosenAttribute.id === attribute.id" />
        </button>
      </div>
      <div
        v-if="chosenLabel && availableVariants && availableVariants[attribute.id]"
        class="variants-wrapper"
      >
        <button
          v-for="availableAttribute in attribute.labels.filter(
            label => availableVariants && availableVariants[attribute.id].includes(label.id)
          )"
          :key="availableAttribute.title"
        >
          <Badge
            size="small"
            :badge-text="availableAttribute.title"
            is-opacity
          />
        </button>
      </div>
    </div>
    <InputNumber
      class="controls-quantity"
      inputId="horizontal-buttons"
      showButtons
      buttonLayout="horizontal"
      :step="1"
    >
      <template #incrementbuttonicon>
        <Plus />
      </template>
      <template #decrementbuttonicon>
        <Minus />
      </template>
    </InputNumber>
    <button class="controls-add">Add to Cart</button>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
