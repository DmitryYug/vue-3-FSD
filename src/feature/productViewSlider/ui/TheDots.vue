<script setup lang="ts">
import { computed } from "vue";

import { DotIcon } from "@/shared/assets";

const props = defineProps<{ dotsLength: number; activeDot: number }>();

const computeDots = computed(() => {
  const res = [];
  for (let i = 0; i < props.dotsLength; i++) {
    res.push(i);
  }
  return res;
});
</script>

<template>
  <button class="dots-wrapper">
    <DotIcon
      v-for="dot in computeDots"
      :key="dot"
      :is-active="dot === activeDot"
      @click="$emit('setActiveDot', dot)"
    />
  </button>
</template>

<style lang="scss">
@import "styles";
</style>
