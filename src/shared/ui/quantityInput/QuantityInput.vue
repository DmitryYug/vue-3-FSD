<script setup lang="ts">
import type { InputNumberInputEvent } from "primevue/inputnumber";

import { Minus, Plus } from "@/shared/assets";

defineProps<{ model: number; onChange: (value: number) => void }>();
const inputStyle = {
  width: "30px",
  padding: "5px",
};
</script>

<template>
  <InputNumber
    :min="0"
    :model-value="model"
    class="control-quantity"
    inputId="horizontal-buttons"
    showButtons
    buttonLayout="horizontal"
    :inputStyle="inputStyle"
    @input="(event: InputNumberInputEvent) => onChange(event.value as number)"
  >
    <template #incrementbuttonicon>
      <Plus />
    </template>
    <template #decrementbuttonicon>
      <Minus />
    </template>
  </InputNumber>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
