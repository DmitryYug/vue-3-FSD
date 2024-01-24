<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "effector-vue/composition";

import { ProductCard } from "@/entities/product";
import { ThePagination } from "@/feature/pagination";
import { SpinnerIcon } from "@/shared/assets";
import { $loading, $productList, getProductList } from "@/widgets/productList";

onMounted(() => {
  getProductList();
});

const productList = useStore($productList);
const loading = useStore($loading);
</script>

<template>
  <div>
    <SpinnerIcon v-if="loading" />
    <div
      v-else
      class="product-list-wrapper"
    >
      <ProductCard
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="pagination-wrapper">
      <ThePagination />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
