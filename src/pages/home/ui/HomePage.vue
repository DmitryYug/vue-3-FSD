<script setup lang="ts">
import { ProductList } from "@/widgets/productList";
</script>

<template>
  <main class="home-wrapper">
    <img
      src="@/shared/assets/banner.png"
      alt="home-banner"
    />
    <div class="title-divided">
      <h1>Products</h1>
    </div>
    <ProductList />
  </main>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
