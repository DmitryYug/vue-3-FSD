<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "effector-vue/composition";

import { ProductCard } from "@/entities/product";
import { ThePagination } from "@/features/pagination";
import { SpinnerIcon } from "@/shared/assets";
import { $loading, $productList, getProductList } from "@/widgets/ProductList";

onMounted(() => {
  getProductList();
});

const productList = useStore($productList);
const loading = useStore($loading);
</script>

<template>
  <div>
    <SpinnerIcon v-if="loading" />
    <div v-else>
      <div class="product-list-wrapper">
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
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
