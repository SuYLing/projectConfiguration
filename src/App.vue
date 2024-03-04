<template>
  <div>
    <a-button :type="'primary'" @click="handleToHome">Home</a-button>
    <a-button :type="'primary'" @click="handleToAbout">About</a-button>
    <router-view />
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from "vue-router"

  const router = useRouter()
  const handleToAbout = () => {
    router.push("/about")
  }
  const handleToHome = () => {
    router.push("/")
  }
</script>
<style scoped lang="less"></style>
