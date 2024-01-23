<script setup lang="ts">
import type { TProduct } from "@/entities/product/model";

defineProps<{ product: TProduct }>();
</script>

<template>
  <div class="product-card-wrapper">
    <div style="width: 220px; height: 220px">image</div>
    <div class="description">
      <span :title="product.title" class="bold-text">{{ product.title }}</span>
      <span class="bold-text">{{ product.min_price }}</span>
      <span :title="product.description" class="text">{{ product.description }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
