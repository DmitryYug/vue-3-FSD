<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import { onMounted } from "vue";

import { $productList, getProductList } from "@/entities/product/model";
import ProductCard from "@/entities/product/ui/ProductCard/ProductCard.vue";

onMounted(() => {
  getProductList();
});

const productList = useStore($productList);
</script>

<template>
  <div class="product-list-wrapper">
    <ProductCard v-for="product in productList" :key="product.id" :product="product" />
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
