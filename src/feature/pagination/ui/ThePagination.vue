<script setup lang="ts">
import { computed } from "vue";

import { ArrowLeftIcon, ArrowRightIcon } from "@/shared/assets";

const pages = computed(() => {
  const res = [];
  for (let i = 1; i <= 5; i++) {
    res.push(i);
  }
  return res;
});
</script>

<template>
  <div class="pagination">
    <button>
      <ArrowLeftIcon />
    </button>
    <button
      v-for="page in pages"
      :class="`page-number ${page === 1 ? 'active' : ''}`"
      :key="page"
    >
      {{ page }}
    </button>
    <button>
      <ArrowRightIcon />
    </button>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
