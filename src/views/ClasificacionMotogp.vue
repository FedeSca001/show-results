<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir la referencia para almacenar la lista y el estado de carga
const list = ref([]);
const isLoading = ref(true);

const getData = async () => {
  try {
    // Esperar la respuesta de la solicitud
    const { data } = await axios.get('https://bot-scraping.onrender.com/clasificacionMotogp');
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
    <h2>Clasificación del Campeonato MotoGP</h2>
    <div v-if="isLoading" class="spinner"></div>
    <ul v-else-if="list.length > 0" class="table-list">
      <li v-for="(item, index) in list" :key="index" class="table-row">
        <!-- Columna de posición -->
        <div class="table-cell posicion">{{ item.posicion }}</div>
        <!-- Columna de nombre del piloto -->
        <div class="table-cell piloto">{{ item.piloto }}</div>
        <!-- Columna de puntos -->
        <div class="table-cell puntos">{{ item.puntos }} pts</div>
      </li>
    </ul>
    <p v-else>No se encontraron datos.</p>
  </main>
</template>

<style scoped>
/* Estilo del título */
h2 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  text-align: center;
  font-weight: bold;
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

/* Estilo de lista de la tabla */
.table-list {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  border-collapse: collapse;
  margin-top: 20px;
}

/* Fila de la tabla (Card) */
.table-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 10px;
  background-color: #f4f4f480;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease;
}

.table-row:hover {
  background-color: #e9ecef;
}

/* Estilo de cada columna de la tabla */
.table-cell {
  padding: 10px;
  font-size: 18px;
  flex-basis: 33%; /* Cada columna ocupa el 33% del ancho */
  text-align: center;
}

/* Estilo para la columna de posición */
.posicion {
  font-weight: bold;
  color: #ef0014;
  font-size: 20px;
}

/* Estilo para la columna de piloto */
.piloto {
  font-weight: 600;
  color: #333;
  text-align: left;
}

/* Estilo para la columna de puntos */
.puntos {
  background-color: #e9ecef;
  border-radius: 5px;
  font-weight: bold;
  color: #007bff;
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
