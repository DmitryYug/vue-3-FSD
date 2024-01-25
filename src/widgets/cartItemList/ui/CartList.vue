<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { CartIcon, DeleteIcon } from "@/shared/assets";
import { QuantityInput } from "@/shared/ui";
import { $cartItems } from "@/widgets/cartItemList";
import ProductTableItem from "@/widgets/cartItemList/ui/ProductTableItem.vue";

const cartItems = useStore($cartItems);
// const cartItems = [
//   {
//     id: "LercRv4o",
//     product_id: "8",
//     product_list_price: "50.00",
//     product_type: "Other",
//     name: "Unisize T-Shirt - Blue",
//     quantity: 3,
//     price: 50,
//     total_price: 150,
//     variant: {
//       id: "53",
//       title: "Unisize T-Shirt - Blue",
//       english_title: "Unisize T-Shirt - Blue",
//       image: { title: "blue.jpg", url: "products/images/cQUUGg6fDO.jpg" },
//       sku: "1",
//       price: "50.00",
//       discount_price: null,
//       tab_content: [],
//       pre_order_expected_date: null,
//       max_purchase_limit: null,
//       labels: [],
//       metadata: [],
//       recommended_variants: [],
//     },
//   },
//   {
//     id: "RTJgu,UP",
//     product_id: "1",
//     product_list_price: "220.00",
//     product_type: "Other",
//     name: "Pink Jeans 40W & 40L Linen",
//     quantity: 3,
//     price: 140,
//     total_price: 420,
//     variant: {
//       id: "9",
//       title: "Pink Jeans 40W & 40L Linen",
//       english_title: "Pink Jeans 40W & 40L Linen",
//       image: { title: "pink.jpg", url: "products/images/ZUCqZ8gOxU.jpg" },
//       sku: "1",
//       price: "140.00",
//       discount_price: null,
//       tab_content: [],
//       pre_order_expected_date: null,
//       max_purchase_limit: null,
//       labels: [],
//       metadata: [],
//       recommended_variants: [],
//     },
//   },
//   {
//     id: "FfGWHri4",
//     product_id: "7",
//     product_list_price: "100.00",
//     product_type: "Other",
//     name: "Men's Logger Shirt S",
//     quantity: 2,
//     price: 100,
//     total_price: 200,
//     variant: {
//       id: "44",
//       title: "Men's Logger Shirt S",
//       english_title: "Men's Logger Shirt S",
//       image: { title: "all.jpg", url: "products/images/MjW7kGXd1f.jpg" },
//       sku: "1",
//       price: "100.00",
//       discount_price: null,
//       tab_content: [],
//       pre_order_expected_date: null,
//       max_purchase_limit: null,
//       labels: [],
//       metadata: [],
//       recommended_variants: [],
//     },
//   },
// ];
</script>
<template>
  <div class="list">
    <h1>My cart</h1>
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
            :on-change="() => {}"
            :model="0"
          />
        </td>
        <td>
          <span class="bold-text">${{ item.total_price }}</span>
        </td>
        <td>
          <button>
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
