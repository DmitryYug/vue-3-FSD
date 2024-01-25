<script setup lang="ts">
defineProps<{ fillColor?: string }>();
</script>

<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="7.5"
      stroke="#474747"
      :fill="fillColor"
    />
  </svg>
</template>
