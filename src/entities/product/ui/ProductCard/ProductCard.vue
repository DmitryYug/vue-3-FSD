<script setup lang="ts">
import type { TProduct } from "@/entities/product";
import { getImageByUrl } from "@/shared/api";

defineProps<{ product: TProduct }>();
</script>

<template>
  <router-link
    :to="`product/${product.id}`"
    class="product-card"
  >
    <div class="img-container">
      <img
        :src="getImageByUrl(product.images[0].url)"
        :alt="product.title"
      />
    </div>
    <div class="description">
      <span
        :title="product.title"
        class="bold-text"
        >{{ product.title }}</span
      >
      <span class="bold-text">${{ Math.floor(product.min_price) }}</span>
      <span
        :title="product.description"
        class="text-trimmed"
        >{{ product.description }}</span
      >
    </div>
  </router-link>
</template>

<style lang="scss">
@import "styles";
</style>
