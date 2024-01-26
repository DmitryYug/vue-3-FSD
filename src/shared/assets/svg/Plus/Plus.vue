<script setup lang="ts">
import { computed } from "vue";

import { TABLET_WIDTH } from "@/shared/constants";
import { useScreenWidth } from "@/shared/lib";
const { screenWidth } = useScreenWidth();

const isScreenTablet = computed(() => {
  return screenWidth.value <= TABLET_WIDTH;
});
</script>

<template>
  <svg
    :width="isScreenTablet ? 12 : 24"
    :height="isScreenTablet ? 12 : 24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19"
      stroke="#474747"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="#474747"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
