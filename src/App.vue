<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
const primerLlamado = ref('')
// Estado del menú desplegable
const isMenuOpen = ref(false);
onMounted(async ()=>{
    // Esperar la respuesta de la solicitud
    const { data } = await axios.get('https://bot-scraping.onrender.com/');
    // Asignar los datos a la lista
    primerLlamado.value = data;
})
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

      <!-- Botón del menú rebatible -->
      <button @click="toggleMenu" class="menu-toggle">
        {{ isMenuOpen ? 'Cerrar' : 'Abrir' }} Menú
      </button>

      <!-- Contenido del menú rebatible -->
      <div v-if="isMenuOpen" class="dropdown-menu">
        <RouterLink to="/cambioDeMonedas">Cambio de monedas</RouterLink>
        <RouterLink to="/crypto"> Crypto</RouterLink>
        <RouterLink to="/motogpmotorsport">Motogpmotorsport</RouterLink>
        <RouterLink to="/motogp">Motogp</RouterLink>
        <RouterLink to="/clasificacionMotogp">ClasificacionMotogp</RouterLink>
      </div>
    </nav>
  </header>

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
</style>
