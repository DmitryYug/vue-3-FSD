<script setup lang="ts">
import { CartIcon, LogoIcon } from "@/shared/assets";
</script>

<template>
  <div class="header-container">
    <div class="logo">
      <LogoIcon />
    </div>
    <div class="navbar">
      <router-link to="/" class="home"> Home </router-link>
      <router-link to="/cart">
        <CartIcon />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
