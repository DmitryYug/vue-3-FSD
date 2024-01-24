<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "effector-vue/composition";

import { ProductViewControls } from "@/feature/productViewControls";
import { ProductViewSlider } from "@/feature/productViewSlider";
import { Badge } from "@/shared/ui";
import { $product, getProductInfo } from "@/widgets/productView/model";

const { currentRoute } = useRouter();

onMounted(() => {
  const id = currentRoute.value.params.id;
  if (id) {
    getProductInfo(id as string);
  }
});

const product = useStore($product);
</script>

<template>
  <div
    class="product-view"
    v-if="product"
  >
    <div>
      <ProductViewSlider :images="product.images" />
    </div>
    <div class="product-view-description">
      <Badge :badge-text="product.discount_price || 'NEW'" />
      <span class="bold-text">{{ product.title }}</span>
      <span class="bold-text">${{ Math.floor(product.max_price) }}</span>
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
