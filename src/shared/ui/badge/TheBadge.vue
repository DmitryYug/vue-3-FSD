<script setup lang="ts">
defineProps<{ badgeText: string }>();
</script>

<template>
  <div class="badge">
    {{ badgeText }}
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
