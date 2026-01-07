<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import GoBackHistory from '../components/GoBackHistory.vue';
// Estados
const primerLlamado = ref('nada');
const isConnected = ref(false);
const isLoading = ref(true);
onMounted(async () => {
  try {
    // Hacer una solicitud al servidor
    const { data } = await axios.get('https://bot-scraping.onrender.com');
    primerLlamado.value = data;
    
    // Marcar que la conexión fue exitosa
    isConnected.value = true;
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    isConnected.value = false;
  } finally {
    isLoading.value = false; // Dejar de cargar cuando se complete la solicitud
  }
});

/*const logOut = () => {
  // Obtener los datos guardados en el localStorage
  const userData = JSON.parse(localStorage.getItem('user')); // 'user' es la clave
  
  if (userData) {
    userData.logued = false;
    localStorage.setItem('user', JSON.stringify(userData));
    location.reload();
  }
};*/
</script>

<template>
  <header>  
    <nav>
      <RouterLink to="/" class="dropdown-button">Inicio</RouterLink>     
      <div class="dropdown">
        <RouterLink to="/motogp"><button class="dropdown-button" >MotoGP</button></RouterLink> 
      </div>
      <div class="dropdown">
        <RouterLink to="/formula1"><button class="dropdown-button">Fórmula 1</button></RouterLink>
      </div>
      <!-- Botón de Logout -->
      <!--<button @click="logOut" class="logout-button">Log out</button>-->
      <GoBackHistory />
    </nav>
    <p v-if="isLoading" class="info-message">Estableciendo conexión con el servidor...</p>
    <p v-else-if="!isConnected" class="error-message">Error: No se pudo conectar con el servidor.</p>
  </header>
</template>

  
  <style scoped>
  /* Estilo para el header */
  header {
    text-align: center;
    border-radius: 10px;
    color: #ffffff;
  }
  
  /* Estilo de los enlaces */
  a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
  }
  
  a:hover {
    text-decoration: underline;
    color: #33ff33;
  }
  
  /* Estilo para la barra de navegación */
  nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    padding: 10px;
    background-color: #444;
    border-radius: 10px;
    position: relative;
  }
  
  /* Botón de Logout */
  .logout-button {
    background-color: #9c0000;
    color: #dfd4d1;
    font-size: 16px;
    font-family: monospace;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .logout-button:hover {
    background-color: #f73c3c;
    transform: scale(1.05); 
  }
  
  .dropdown-button {
    background-color: #2d2d2d;
    color: #ffffff;
    border: none;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .dropdown-button:hover {
    background-color: #444;
    color: #33ff33;
  }
      
  /* Mensajes de información y error */
  .info-message {
    color: yellow;
    font-weight: bold;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
  }
  </style>
  
  
