<script setup>
import HeaderComponent from './components/Header.vue';
//import UserAdministration from './components/UserAdministration.vue';

// Inicializar el usuario desde localStorage
//const storedUser = localStorage.getItem('user');
//const userLogged = ref(storedUser ? JSON.parse(storedUser) : null);
</script>

<template>
  <div>
    <!-- Acceso seguro a logued -->
    <!--<div v-if="userLogged?.logued">-->
      <HeaderComponent />
      <RouterView />
    </div>
    <!--
      <div v-else>
        <UserAdministration />
      </div>
    </div>
    -->
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