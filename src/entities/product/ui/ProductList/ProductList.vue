<script setup lang="ts">
import { useStore } from "effector-vue/composition";
import { onMounted } from "vue";

import { $productList, getProductList } from "@/entities/product/model";

onMounted(() => {
  getProductList();
});

const productList = useStore($productList);
</script>

<template>
  <div>
    <span>{{ JSON.stringify(productList) }}</span>
  </div>
</template>

<style lang="scss"></style>
