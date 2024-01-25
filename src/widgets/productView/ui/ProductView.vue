<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { $product } from "@/entities/product";
import { $chosenVariant, ProductViewControls } from "@/feature/productViewControls";
import { ProductViewSlider } from "@/feature/productViewSlider";
import { Badge } from "@/shared/ui";

const product = useStore($product);
const chosenVariant = useStore($chosenVariant);
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
      <ProductViewControls :product="product" />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
