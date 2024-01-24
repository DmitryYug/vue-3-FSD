import { onMounted, onUnmounted, ref, watch } from "vue";

export const useScreenWidth = () => {
  const screenWidth = ref(window.innerWidth);

  const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
  };

  const stopWatching = watch(
    () => screenWidth.value,
    () => {
      console.log("Screen width changed:", screenWidth.value);
    },
    { immediate: true }
  );

  const handleResize = () => {
    updateScreenWidth();
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    stopWatching();
  });

  return {
    screenWidth,
  };
};
