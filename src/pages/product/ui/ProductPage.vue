<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { getProductInfo } from "@/entities/product";
import { ProductView } from "@/widgets/productView";
const { currentRoute } = useRouter();

onMounted(() => {
  const id = currentRoute.value.params.id;
  if (id) {
    getProductInfo(id as string);
  }
});
</script>

<template>
  <div>
    <ProductView />
  </div>
</template>

<style lang="scss"></style>
