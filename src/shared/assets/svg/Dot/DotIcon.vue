<script setup lang="ts">
defineProps<{ isActive: boolean }>();
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
      :fill="isActive ? '#474747' : ''"
    />
  </svg>
</template>
