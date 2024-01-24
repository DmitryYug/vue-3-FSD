<script setup lang="ts">
import type { TProduct } from "@/entities/product/model";
import { getImageByUrl } from "@/shared/api";

defineProps<{ product: TProduct }>();
</script>

<template>
  <div class="product-card-wrapper">
    <div class="img-container">
      <img :src="getImageByUrl(product.images[0].url)" :alt="product.title" />
    </div>
    <div class="description">
      <span :title="product.title" class="bold-text">{{ product.title }}</span>
      <span class="bold-text">${{ Math.floor(product.min_price) }}</span>
      <span :title="product.description" class="text">{{ product.description }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
