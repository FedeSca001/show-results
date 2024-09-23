<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

// Estados
const primerLlamado = ref('nada');
const isMenuOpen = ref(false); // Estado del menú desplegable
const isConnected = ref(false); // Estado de conexión al servidor

// Al montar el componente
onMounted(async () => {
  try {
    // Hacer una solicitud al servidor
    const { data } = await axios.get('https://bot-scraping.onrender.com/');
    primerLlamado.value = data;

    // Marcar que la conexión fue exitosa
    isConnected.value = true;
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    isConnected.value = false; // Conexión fallida
  }
});

// Función para alternar el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header>
    <h1>Bienvenido al Frontend de Mi Bot-Scraping</h1>
    <h2>Acceso al servidor: <a href="https://bot-scraping.onrender.com/" target="_blank">https://bot-scraping.onrender.com/</a></h2>
    <h3>Y al repositorio github: <a href="https://github.com/FedeSca001/bot-scraping" target="_blank">https://github.com/FedeSca001/bot-scraping</a></h3>

    <!-- Enlaces visibles siempre -->
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/acercaDe">Acerca de</RouterLink>

      <!-- Botón del menú rebatible (deshabilitado si no hay conexión) -->
      <button 
        @click="toggleMenu" 
        class="menu-toggle" 
        :disabled="!isConnected">
        {{ isMenuOpen ? 'Cerrar' : 'Abrir' }} Menú
      </button>

      <!-- Contenido del menú rebatible, solo si hay conexión y el menú está abierto -->
      <div v-if="isMenuOpen && isConnected" class="dropdown-menu">
        <RouterLink @click="toggleMenu" to="/cambioDeMonedas">Cambio de monedas</RouterLink>
        <RouterLink @click="toggleMenu" to="/crypto">Crypto</RouterLink>
        <RouterLink @click="toggleMenu" to="/motogp">Moto GP</RouterLink>
        <RouterLink @click="toggleMenu" to="/motoGpDiarioAs">Moto GP Diario AS</RouterLink>
        <RouterLink @click="toggleMenu" to="/motogpmotorsport">Moto GP Motorsport</RouterLink>
        <RouterLink @click="toggleMenu" to="/clasificacionMotogp">Clasificación MotoGP</RouterLink>
        <RouterLink @click="toggleMenu" to="/formula1Oficial">F1 Oficial</RouterLink>
        <RouterLink @click="toggleMenu" to="/formula1DiarioAS">F1 Diario AS</RouterLink>
        <RouterLink @click="toggleMenu" to="/clasificacionF1">Clasificación F1</RouterLink>
      </div>
    </nav>

    <!-- Mensaje de error si no hay conexión -->
    <p v-if="!isConnected" class="error-message">No se pudo conectar al servidor. Verifique su conexión e intente nuevamente.</p>
  </header>

  <!-- Vista de rutas -->
  <RouterView />
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
  margin: 0 5px;
}

a:hover {
  text-decoration: underline;
  color: #33ff33;
}

/* Estilo para los títulos */
h1 {
  font-size: 28px;
  margin-bottom: 10px;
  font-family: monospace;
  color: #33ff33;
}

h2, h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

h2 {
  font-size: 22px;
}

/* Estilo para la barra de navegación */
nav {
  margin-top: 20px;
  padding: 10px;
  background-color: #444;
  border-radius: 10px;
  position: relative;
}

/* Botón del menú */
.menu-toggle {
  background-color: #33ff3385;
  margin: 5px;
  color: #000;
  font-size: 16px;
  font-family: monospace;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.8s;
}

.menu-toggle:hover {
  background-color: #28cc28;
}

.menu-toggle:disabled {
  background-color: #666;
  cursor: not-allowed;
}

/* Menú desplegable */
.dropdown-menu {
  display: flex;
  flex-direction: column;
  background-color: #2d2d2d;
  border: 1px solid #33ff33;
  padding: 10px;
  position: absolute;
  top: 50px;
  right: 0;
  width: 40%;
  text-align: left;
  border-radius: 8px;
}

.dropdown-menu a {
  color: #ffffff;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #33ff33;
  transition: color 0.3s ease;
}

.dropdown-menu a:hover {
  color: #33ff33;
}

/* Estilo para ocultar las fronteras del último elemento */
.dropdown-menu a:last-child {
  border-bottom: none;
}

/* Mensaje de error */
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style>
