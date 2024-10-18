<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/Header.vue';
import UserAdministration from './components/UserAdministration.vue';

// Inicializar el usuario desde localStorage
const userLogged = ref(localStorage.getItem('user') || null);

</script>

<template>
  <div>
    <div v-if="userLogged">
      <HeaderComponent />
      <RouterView />
    </div>
    <div v-else>
      <UserAdministration />
    </div>
  </div>
</template>

<style scoped>
/* Agrega tus estilos aquí */
</style>
