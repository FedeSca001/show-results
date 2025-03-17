<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir la referencia para almacenar la lista de noticias y el estado de carga
const noticiasFormula1 = ref([]);  // Cambiado de 'list' a 'noticiasFormula1' para mayor claridad
const isLoading = ref(true);  // Estado de carga
const url = import.meta.env.VITE_HOST_LOCAL || import.meta.env.VITE_HOST_SERVER;

// Función para obtener los datos de Fórmula 1
const getData = async () => {
  try {
    // Esperar la respuesta de la solicitud
    const { data } = await axios.get(url+'/formula1DiarioAS');
    // Asignar los datos a la lista
    noticiasFormula1.value = data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false; // Marcar que la carga ha terminado
  }
};

// Llamar la función para obtener los datos cuando el componente está montado
onMounted(getData);
</script>

<template>
  <main>
    <h2>Noticias de Fórmula 1 - Diario AS</h2> <!-- Cambiado el título -->
    
    <!-- Mostrar spinner si está cargando -->
    <div v-if="isLoading" class="spinner"></div>

    <!-- Lista de noticias cuando hay datos -->
    <ul v-else-if="noticiasFormula1.length > 0" class="card-list">
      <li v-for="(noticia, index) in noticiasFormula1" :key="index" class="card-item">
        <h3>{{ noticia.titulo }}</h3>
        
        <!-- Mostrar imagen si está disponible -->
        <div v-if="noticia.img && noticia.img.length > 5" class="site-img-card">
          <img :src="noticia.img" :alt="noticia.titulo" class="site-img-card">
        </div>
        
        <!-- Imagen por defecto si no hay imagen disponible -->
        <div v-else class="site-img-card fallback-img">Sin imagen</div>
        
        <!-- Enlace a la noticia -->
        <a :href="noticia.enlace" target="_blank">Leer más</a>
      </li>
    </ul>

    <!-- Mensaje si no se encuentran datos -->
    <p v-else>No se encontraron noticias.</p>
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
