<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { CartIcon, DeleteIcon } from "@/shared/assets";
import { QuantityInput } from "@/shared/ui";
import { $cartItems, changeQuantity, deleteItem } from "@/widgets/cartItems";

import ProductTableItem from "./ProductTableItem.vue";

const cartItems = useStore($cartItems);
</script>
<template>
  <div class="list">
    <table v-if="cartItems">
      <tr>
        <th>PRODUCT</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
        <th></th>
      </tr>
      <tr
        v-for="item in cartItems"
        :key="item.id"
        class="divider"
      >
        <td>
          <ProductTableItem :cart-item="item" />
        </td>
        <td>
          <QuantityInput
            :on-change="(quantity: number) => changeQuantity({ item, quantity })"
            :model="item.quantity"
          />
        </td>
        <td>
          <span class="bold-text">${{ item.quantity * item.product_list_price }}</span>
        </td>
        <td>
          <button @click="() => deleteItem(item.id)">
            <DeleteIcon />
          </button>
        </td>
      </tr>
    </table>
    <div
      class="no-data"
      v-else
    >
      <CartIcon
        :height="200"
        :width="200"
      />
      <h2 class="bold-text">Card is empty</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
