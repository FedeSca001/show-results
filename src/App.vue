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
    <div v-if="userLogged.logued">
      <HeaderComponent />
      <RouterView />
    </div>
    <div v-else>
      <UserAdministration />
    </div>
  </div>
</template>
