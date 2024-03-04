<template>
  <div class="about">
    <h1 class="text-blue-500">我是About</h1>
    <a-button type="primary" @click="decrement">-1</a-button>
    <h1 class="text-xl text-green-700">{{ count }}</h1>
    <a-button type="primary" @click="increment">+1</a-button>
  </div>
</template>
<script setup lang="ts">
  import { storeToRefs } from "pinia"
  import { useTestStore } from "@/stores/modules/test"

  const testStore = useTestStore()
  const { count } = storeToRefs(testStore)
  const { increment, decrement } = testStore
</script>
<style lang="less" scoped></style>
