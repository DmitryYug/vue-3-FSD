<script setup lang="ts">
import { RouterView } from "vue-router";

import { AppHeader } from "@/widgets/AppHeader";

import "./styles/index.scss";
</script>

<template>
  <AppHeader />
  <router-view />
</template>

<style scoped></style>
