<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import { onMounted } from "vue";

import { $loading, $productList, getProductList } from "@/entities/product/model";
import ProductCard from "@/entities/product/ui/ProductCard/ProductCard.vue";
import Spinner from "@/shared/assets/svg/Spinner/SpinnerLoader.vue";

onMounted(() => {
  getProductList();
});

const productList = useStore($productList);
const loading = useStore($loading);
</script>

<template>
  <div>
    <Spinner v-if="loading" />
    <div v-else class="product-list-wrapper">
      <ProductCard v-for="product in productList" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
