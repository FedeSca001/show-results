<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
// Estados
const primerLlamado = ref('nada');
const isConnected = ref(false);
const isLoading = ref(true);
onMounted(async () => {
  try {
    // Hacer una solicitud al servidor
    const { data } = await axios.get('https://bot-scraping.onrender.com/');
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


const logOut = () => {
  // Obtener los datos guardados en el localStorage
  const userData = JSON.parse(localStorage.getItem('user')); // 'user' es la clave
  
  if (userData) {
    userData.logued = false;
    localStorage.setItem('user', JSON.stringify(userData));
    location.reload();
  }
};
</script>

<template>
  <header>  
    <!-- Enlaces visibles siempre -->
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/acercaDe">Acerca de</RouterLink>
      
      <!-- Menú desplegable para categorías de contenido -->
      <div class="dropdown">
        <button class="dropdown-button">Finanzas</button>
        <div class="dropdown-menu">
          <RouterLink to="/cambioDeMonedas">Cambio de monedas</RouterLink>
          <RouterLink to="/crypto">Crypto</RouterLink>
        </div>
      </div>

      <!-- Menú desplegable para MotoGP -->
      <div class="dropdown">
        <button class="dropdown-button">MotoGP</button>
        <div class="dropdown-menu">
          <RouterLink to="/motogp">Moto GP</RouterLink>
          <RouterLink to="/motoGpDiarioAs">Moto GP Diario AS</RouterLink>
          <RouterLink to="/motoGpMarca">Moto GP Marca</RouterLink>
          <RouterLink to="/motogpmotorsport">Moto GP Motorsport</RouterLink>
          <RouterLink to="/clasificacionMotogp">Clasificación MotoGP</RouterLink>
        </div>
      </div>

      <!-- Menú desplegable para Fórmula 1 -->
      <div class="dropdown">
        <button class="dropdown-button">Fórmula 1</button>
        <div class="dropdown-menu">
          <RouterLink to="/formula1Oficial">F1 Oficial</RouterLink>
          <RouterLink to="/formula1DiarioAS">F1 Diario AS</RouterLink>
          <RouterLink to="/clasificacionF1">Clasificación F1</RouterLink>
        </div>
      </div>

      <!-- Botón de Logout -->
      <button @click="logOut" class="logout-button">Log out</button>
    </nav>
  
    <!-- Mensajes según el estado de la conexión -->
    <p v-if="isLoading" class="info-message">Estableciendo conexión con el servidor...</p>
    <p v-else-if="!isConnected" class="error-message">Error: No se pudo conectar con el servidor.</p>
  </header>
</template>

  
  <style scoped>
  /* Estilo para el header */
  header {
    text-align: center;
    background-color: #2d2d2d;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
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
  
  /* Menú desplegable */
  .dropdown {
    position: relative;
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
  
  .dropdown-menu {
    display: none;
    flex-direction: column;
    background-color: #333;
    border: 1px solid #33ff33;
    padding: 10px;
    position: absolute;
    top: 40px;
    width: 200px;
    border-radius: 8px;
    text-align: left;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-menu {
    display: flex;
  }
  
  .dropdown-menu a {
    color: #ffffff;
    font-size: 14px;
    padding: 8px 0;
    border-bottom: 1px solid #555;
  }
  
  .dropdown-menu a:hover {
    color: #33ff33;
  }
  
  /* Ocultar borde inferior del último elemento */
  .dropdown-menu a:last-child {
    border-bottom: none;
  }
  
  /* Mensajes de información y error */
  .info-message {
    color: yellow;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 20px;
  }
  </style>
  
  
