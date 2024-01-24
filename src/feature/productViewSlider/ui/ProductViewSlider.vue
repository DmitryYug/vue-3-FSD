<script setup lang="ts">
import { ref } from "vue";

import { TheDots } from "@/feature/productViewSlider";
import { getImageByUrl } from "@/shared/api";

defineProps<{ images: { title: string; url: string }[] }>();
const active = ref(0);
const setActive = (index: number) => {
  active.value = index;
};
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-img-container">
      <transition
        name="fade"
        mode="out-in"
      >
        <img
          :src="getImageByUrl(images[active].url)"
          :alt="images[active].title"
          :key="active"
        />
      </transition>
    </div>
    <TheDots
      :dots-length="images.length"
      :active-dot="active"
      @setActiveDot="setActive"
    />
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
