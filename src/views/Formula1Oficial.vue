<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir la referencia para almacenar la lista y el estado de carga
const list = ref([]);
const isLoading = ref(true);
const url = 'https://bot-scraping.onrender.com';

const getData = async () => {
  try {
    // Esperar la respuesta de la solicitud
    const { data } = await axios.get(url+'/formula1Oficial');
    // Asignar los datos a la lista
    list.value = data;
    
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false; // Marcar que la carga ha terminado
  }
};

onMounted(getData);
</script>

<template>
  <main>
    <h2>Formula 1 NEWS Oficial</h2>
    <div v-if="isLoading" class="spinner"></div>
    <ul v-else-if="list.length > 0" class="card-list">
      <li v-for="(item, index) in list" :key="index" class="card-item">
        <h3>{{ item.titulo }}</h3>
        <div v-if="item.img && item.img.length > 5" class="site-img-card">
          <img :src="item.img" :alt="item.titulo" class="site-img-card">
        </div>
        <div v-else class="site-img-card fallback-img"></div>
        <a :href="item.enlace" target="_blank">Visitar enlace</a>
      </li>
    </ul>
    <p v-else>No se encontraron datos.</p>
  </main>
</template>

<style scoped>
/* Enlace de las cards */
a {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>
