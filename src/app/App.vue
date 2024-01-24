<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

import { AppHeader } from "@/widgets/appHeader";

import "./styles/index.scss";
import "primevue/resources/themes/aura-light-green/theme.css";

const route = useRoute();

const beforeEnter = (el: Element) => {
  const htmlEl = el as HTMLHtmlElement;
  if (route.name !== "home") {
    htmlEl.style.transform = "translateX(100%)";
  }
};
const enter = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLHtmlElement;
  if (route.name !== "home") {
    htmlEl.offsetHeight;
    htmlEl.style.transition = "transform 0.5s";
    htmlEl.style.transform = "translateX(0)";
  }
  done();
};
const leave = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLHtmlElement;
  if (route.name !== "home") {
    htmlEl.style.transition = "transform 0.5s";
    htmlEl.style.transform = "translateX(-100%)";
  }
  done();
};
</script>

<template>
  <AppHeader />
  <transition
    name="slide"
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <router-view v-slot="{ Component }">
      <component
        :is="Component"
        :key="route.fullPath"
      />
    </router-view>
  </transition>
</template>

<style scoped></style>
