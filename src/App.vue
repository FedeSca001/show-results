<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/Header.vue';
import UserAdministration from './components/UserAdministration.vue';

// Inicializar el usuario desde localStorage
const storedUser = localStorage.getItem('user');
const userLogged = ref(storedUser ? JSON.parse(storedUser) : null);
</script>

<template>
  <div>
    <!-- Acceso seguro a logued -->
    <div v-if="userLogged?.logued">
      <h1>Bienvenido al Frontend de Mi Bot-Scraping</h1>
      <HeaderComponent />
      <RouterView />
    </div>
    <div v-else>
      <UserAdministration />
    </div>
  </div>
</template>

<style scoped>
  /* Estilo para los títulos */
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
    text-align: center;
    font-family: monospace;
    color: #33ff33;
  }
</style>