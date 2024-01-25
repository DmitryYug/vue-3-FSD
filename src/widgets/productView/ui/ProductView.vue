<script setup lang="ts">
import { onUnmounted } from "vue";
import { useStore } from "effector-vue/composition";

import {
  $chosenVariant,
  $product,
  setChosenAttribute,
  setChosenLabel,
  setQuantity,
  setVariant,
} from "@/entities/product";
import { ProductViewControls } from "@/feature/productViewControls";
import { ProductViewSlider } from "@/feature/productViewSlider";
import { Badge } from "@/shared/ui";

onUnmounted(() => {
  clearData();
});

const product = useStore($product);
const chosenVariant = useStore($chosenVariant);

const clearData = () => {
  setChosenAttribute(null);
  setChosenLabel(null);
  setVariant(null);
  setQuantity(0);
};
</script>

<template>
  <div
    class="product-view"
    v-if="product"
  >
    <div>
      <ProductViewSlider :product="product" />
    </div>
    <div class="product-view-description">
      <Badge :badge-text="product.discount_price || 'NEW'" />
      <span class="bold-text">{{ chosenVariant ? chosenVariant.title : product.title }}</span>
      <span class="bold-text"
        >${{ chosenVariant ? Math.floor(chosenVariant.price) : Math.floor(product.max_price) }}</span
      >
      <p class="text">
        {{ product.description }}
      </p>
      <ProductViewControls
        :product="product"
        :clear-data="clearData"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
