<script setup lang="ts">
import type { TCartItem } from "@/entities/cart";
import { getImageByUrl } from "@/shared/api";
import { DotIcon } from "@/shared/assets";
import { getColorFromImageTitle } from "@/shared/lib";

defineProps<{ cartItem: TCartItem }>();
</script>

<template>
  <div class="list-item">
    <div class="img-container">
      <img
        :src="getImageByUrl(cartItem.variant.image.url)"
        :alt="cartItem.variant.image.title"
      />
    </div>
    <div class="info">
      <span class="bold-text">{{ cartItem.name }}</span>
      <DotIcon :fill-color="getColorFromImageTitle(cartItem.variant.image.title)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
