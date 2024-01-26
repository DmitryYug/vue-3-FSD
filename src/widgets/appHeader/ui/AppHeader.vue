<script setup lang="ts">
import { computed } from "vue";

import { CartIconWithBadge, LogoIcon } from "@/shared/assets";
import { BurgerIcon } from "@/shared/assets/svg/BurgerIcon";
import { TABLET_WIDTH } from "@/shared/constants";
import { useScreenWidth } from "@/shared/lib";

const { screenWidth } = useScreenWidth();
const isScreenTablet = computed(() => {
  return screenWidth.value <= TABLET_WIDTH;
});
</script>

<template>
  <div class="header-container">
    <BurgerIcon v-if="isScreenTablet" />
    <router-link
      to="/"
      class="logo"
    >
      <LogoIcon :view="isScreenTablet ? 's' : 'l'" />
    </router-link>
    <div class="navbar">
      <router-link
        to="/"
        class="home"
      >
        Home
      </router-link>
      <router-link to="/cart">
        <CartIconWithBadge
          :height="32"
          :width="32"
        />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles";
</style>
