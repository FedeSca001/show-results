<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir los estados reactivas
const noticiasFormula1 = ref([]);
const isLoading = ref(true);
const indexNoticas = ref(0);

// Función para obtener las noticias
const getData = async () => {
  console.log(indexNoticas.value);
  
  try {
    const url = import.meta.env.VITE_HOST_SERVER;

    const urlNoticias = indexNoticas.value === 0 
      ? url+'/motoGpDiarioAS' 
      : url+`/motoGpDiarioAS/${indexNoticas.value}`;
    
    const { data } = await axios.get(urlNoticias);
    
    if (indexNoticas.value === 0) {
      // Si estamos en la primera página, vaciar las noticias anteriores
      noticiasFormula1.value = data;
    } else {
      // Si es una carga de más noticias, agregamos a las noticias existentes
      noticiasFormula1.value.push(...data);
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false; 
  }
};

// Función para cargar más noticias
const updateNews = () => {
  indexNoticas.value += 1; // Incrementamos el índice para cargar la siguiente página
  getData(); // Llamamos a getData para obtener más noticias
};

// Llamar la función para obtener los datos cuando el componente está montado
onMounted(getData);
</script>

<template>
  <main>
    <h2>Noticias de Moto GP - Diario AS</h2>
    
    <!-- Spinner de carga -->
    <div v-if="isLoading" class="spinner"></div>

    <!-- Lista de noticias -->
     <div v-else-if="noticiasFormula1.length> 0">
      <ul  class="card-list">
        <li v-for="(noticia, index) in noticiasFormula1" :key="noticia.titulo" class="card-item">
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
        
        <!-- Botón para cargar más noticias -->
      </ul>
      <button @click=updateNews>
        <span class="btn-getnews"> Más Noticias </span>
      </button>
    </div>

    <!-- Mensaje si no se encuentran datos -->
    <p v-else>No se encontraron noticias.</p>
  </main>
</template>

<style scoped>
/* Estilos para las cards */
.card-list {
  list-style-type: none;
  padding: 0;
}

.card-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}

.site-img-card {
  width: 100%;
  height: auto;
}

.fallback-img {
  text-align: center;
  padding: 20px;
}

.spinner {
  display: block;
  margin: auto;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #3b8101;
  font-size: 17px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
}

.btn-getnews {
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

button:hover .btn-getnews {
  transform: translateY(-0.53em);
}

button:active .btn-getnews {
  /* Push the button downwards when pressed */
  transform: translateY(-10);
}

</style>
