<script setup lang="ts">
import { onUnmounted } from "vue";
import { useStore } from "effector-vue/composition";

import { $apiError, $product, setError } from "@/entities/product";
import { $chosenVariant, ProductViewControls } from "@/feature/productViewControls";
import { ProductViewSlider } from "@/feature/productViewSlider";
import { Badge } from "@/shared/ui";

onUnmounted(() => {
  setError(false);
});

const product = useStore($product);
const chosenVariant = useStore($chosenVariant);
const error = useStore($apiError);
</script>

<template>
  <div
    class="product-view"
    v-if="product && !error"
  >
    <ProductViewSlider :product="product" />
    <div class="product-view-description">
      <Badge
        v-if="product.direct_sale.is_direct"
        :badge-text="product.discount_price || 'SALE'"
        is-opacity
      />
      <span class="bold-text title">{{ chosenVariant ? chosenVariant.title : product.title }}</span>
      <span class="bold-text price"
        >${{ chosenVariant ? Math.floor(chosenVariant.price) : Math.floor(product.max_price) }}</span
      >
      <p class="text">
        {{ product.description }}
      </p>
      <ProductViewControls :product="product" />
    </div>
  </div>
  <div v-if="error">
    <h2>Oops... smth went wrong</h2>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
