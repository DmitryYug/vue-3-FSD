<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { type TProduct } from "@/entities/product";
import { $activeIndex, setActive, TheDots } from "@/feature/productViewSlider";
import { getImageByUrl } from "@/shared/api";

const { product } = defineProps<{ product: TProduct }>();
const active = useStore($activeIndex);
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
    <TheDots
      :dots-length="product.images.length"
      :active-dot="active"
      @setActiveDot="setActive"
    />
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
