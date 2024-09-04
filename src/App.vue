<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Bienvenido al Frontend de Mi Bot-Scraping</h1>
    <h2>Acceso al servidor: <a href="https://bot-scraping.onrender.com/" target="_blank">https://bot-scraping.onrender.com/</a></h2>
    <p>Esta aplicación web está diseñada para mostrar visualmente las respuestas de solicitudes GET enviadas a un servidor alojado en Render.com. El propósito principal es proporcionar una interfaz gráfica que facilite la interpretación y análisis del contenido extraído.</p>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/acercaDe">Acerca de</RouterLink>
      <span>| Rutas:</span>
      <RouterLink to="/motogpmotorsport">/motogpmotorsport</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

p {
  width: 50%;
  word-wrap: break-word; /* Asegura que el texto quepa dentro del contenedor */
  margin: 20px; /* Centra el párrafo horizontalmente */
}

nav {
  width: 100%;
  background-color: rgb(136, 136, 136);
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
