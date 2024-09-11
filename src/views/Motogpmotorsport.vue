<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir la referencia para almacenar la lista y el estado de carga
const list = ref([]);
const isLoading = ref(true);

const getData = async () => {
  try {
    // Esperar la respuesta de la solicitud
    const { data } = await axios.get('https://bot-scraping.onrender.com/motogpmotorsport');
    // Asignar los datos a la lista
    list.value = data;
    console.log(data);
    
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
    <h2>Noticias MotoGP motorsport</h2>
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
/* Estilo del título */
h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: rgb(91, 90, 90);
  text-align: center;
}

/* Spinner */
.spinner {
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Listas y cards */
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style-type: none;
}

.card-item {
  width: 300px;
  padding: 20px;
  background-color: #f4f4f43a;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Imagen de la card */
.site-img-card {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Cuadrado gris cuando no hay imagen */
.fallback-img {
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  font-size: 16px;
}

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
