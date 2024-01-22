<script setup lang="ts">
import { RouterView } from 'vue-router'
import './styles/index.scss'
import { AppHeader } from '@/widgets/AppHeader'
</script>

<template>
  <AppHeader/>
  <router-view />
</template>

<style scoped>

</style>
