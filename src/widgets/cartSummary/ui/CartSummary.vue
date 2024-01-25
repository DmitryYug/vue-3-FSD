<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { TheButton } from "@/shared/ui";
import { $totalPrice, $totalQuantity } from "@/widgets/cartSummary/model/cartSummaryModel";

const totalQuantity = useStore($totalQuantity);
const totalPrice = useStore($totalPrice);
</script>

<template>
  <div class="summary">
    <div class="summary-row">
      <span class="bold-text">Summary</span>
      <button class="text">Clear all</button>
    </div>
    <div class="summary-row divider">
      <span class="text">Items</span>
      <span class="text">{{ totalQuantity || 0 }}</span>
    </div>
    <div class="summary-row">
      <span class="bold-text">Total</span>
      <span class="bold-text">$ {{ totalPrice || 0 }}</span>
    </div>
    <TheButton title="Checkout" />
  </div>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
