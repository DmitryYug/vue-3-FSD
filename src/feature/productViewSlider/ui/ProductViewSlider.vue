<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "effector-vue/composition";

import { type TProduct } from "@/entities/product";
import { $activeIndex, sliderDotOnClick, TheDots } from "@/feature/productViewSlider";
import { getImageByUrl } from "@/shared/api";

const { product } = defineProps<{ product: TProduct }>();
const active = useStore($activeIndex);
const noImageMessage = computed(() => {
  if (active.value === 0) {
    return "";
  }
  return active.value === -1 ? "Wrong server image title" : "";
});
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-img-container">
      <transition
        name="fade"
        mode="out-in"
      >
        <img
          :src="getImageByUrl(product.images[active].url)"
          :alt="product.images[active].title"
          :key="active"
        />
      </transition>
    </div>
    <span
      class="error"
      v-if="noImageMessage"
    >
      {{ noImageMessage }}
    </span>
    <TheDots
      :dots-length="product.images.length"
      :active-dot="active"
      @setActiveDot="sliderDotOnClick"
    />
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
