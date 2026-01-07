<template>
  <button @click="goBack">
    ⬅ Volver
  </button>
</template>

<script>
import { routeHistory } from '@/router'

export default {
  name: 'GoBackHistory',
  methods: {
    goBack() {
      if (routeHistory.length > 0) {
        const previousRoute = routeHistory.pop()
        this.$router.push(previousRoute)
        console.log(previousRoute);
        
      } else {
        // Ruta por defecto si no hay historial
        this.$router.push('/')
      }
    }
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
