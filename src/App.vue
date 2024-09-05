<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Bienvenido al Frontend de Mi Bot-Scraping</h1>
    <h2>Acceso al servidor: <a href="https://bot-scraping.onrender.com/" target="_blank">https://bot-scraping.onrender.com/</a></h2>
    <h3>Y al repositorio github: <a href="https://github.com/FedeSca001/bot-scraping" target="_blank">https://github.com/FedeSca001/bot-scraping</a></h3>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/acercaDe">Acerca de</RouterLink>
      <span>| Rutas:</span>
      <RouterLink to="/cambioDeMonedas">/cambio de monedas</RouterLink>
      <RouterLink to="/motogpmotorsport">/motogpmotorsport</RouterLink>
      <RouterLink to="/motogp">/motogp</RouterLink>
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
  color: #33ff33;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
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
}

nav a {
  color: #ffffff;
  font-size: 18px;
  padding: 0 15px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #33ff33;
}

span {
  font-size: 18px;
  color: #ffffff;
}
</style>
