<script setup lang="ts">
defineProps<{ badgeText: string; size?: "small"; isOpacity: boolean }>();
</script>

<template>
  <div :class="`badge ${size} ${isOpacity && 'opacity'}`">
    {{ badgeText }}
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
