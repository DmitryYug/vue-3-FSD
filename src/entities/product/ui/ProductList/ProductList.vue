<script setup lang="ts">
import { onMounted } from 'vue'
import { $productList, getProductList } from '@/entities/product/model'
import { useStore } from 'effector-vue/composition'

onMounted(() => {
  getProductList()
})

const productList = useStore($productList)

</script>

<template>
  <div>
    <span>{{JSON.stringify(productList)}}</span>
  </div>
</template>

<style lang="scss">

</style>
