<script setup lang="ts">
import { CartList } from "@/widgets/cartItems";
import { CartSummary } from "@/widgets/cartSummary";
</script>

<template>
  <div>
    <h1>My cart</h1>
    <div class="cart-page">
      <CartList />
      <CartSummary />
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
