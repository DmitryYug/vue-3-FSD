<script setup lang="ts">
defineProps<{ title?: string; disabled?: boolean; onClick?: () => void }>();
</script>

<template>
  <button
    class="controls-add"
    :disabled="disabled"
    @click="onClick"
  >
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
