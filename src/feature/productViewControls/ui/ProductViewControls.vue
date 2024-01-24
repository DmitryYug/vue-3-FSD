<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import type { DropdownChangeEvent } from "primevue/dropdown";

import { type TProduct } from "@/entities/product";
import { DeleteIcon } from "@/shared/assets";
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
      <div v-if="chosenLabel && availableVariants && availableVariants[attribute.id]">
        {{ attribute.labels.filter(label => availableVariants[attribute.id].includes(label.id)) }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
