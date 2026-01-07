<template>
  <button @click="goBack">
    ⬅ Volver
  </button>
</template>

<script setup>
import { routeHistory } from '@/router'
import { useRouter } from 'vue-router'
const router = useRouter();
function goBack() {
  if (routeHistory.length > 0) {
    const previousRoute = routeHistory.pop()
    router.push(previousRoute)
    console.log(previousRoute)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
button {
  background-color: #444;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
