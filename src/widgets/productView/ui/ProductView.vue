<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "effector-vue/composition";

import { ProductViewControls } from "@/feature/productViewControls";
import { ProductViewSlider } from "@/feature/productViewSlider";
import { Badge, TheTitle } from "@/shared/ui";
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
  <div class="product-view">
    <div
      class="product-view-slider"
      v-if="product"
    >
      <ProductViewSlider :images="product.images" />
    </div>
    <div class="product-view-description">
      <Badge />
      <TheTitle />
      <span>$price</span>
      <p>
        {{ product?.description }}
      </p>
      <ProductViewControls />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
