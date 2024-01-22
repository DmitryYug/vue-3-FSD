<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <h1>App</h1>
  <router-link to="/"> Home</router-link>
  <router-link to="/product"> ProductPage</router-link>
  <router-link to="/cart"> CartPage</router-link>
  <router-view />
</template>

<style scoped>

</style>
