<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir la referencia para almacenar la lista y el estado de carga
const list = ref(null);
const isLoading = ref(true);
const url =  import.meta.env.VITE_HOST_SERVER;

const getData = async () => {
  try {
    // Esperar la respuesta de la solicitud
    const { data } = await axios.get(url+'/crypto');
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
    <h2>Cotización de criptomonedas:</h2>
    <div v-if="isLoading" class="spinner"></div>
    <ul v-else-if="list" class="card-list">
      <!-- Iteramos sobre las claves y valores del objeto, excepto la clave 'fecha' -->
      <li v-for="(value, cryptoKey) in list" v-if="cryptoKey !== 'fecha'" :key="cryptoKey" class="card-item">
        {{ cryptoKey }}: <span>{{ value }}</span>
      </li>
    </ul>
    <p v-else>No se encontraron datos.</p>
    <p v-if="!isLoading && list" class="date-info">
      Fecha de los datos: {{ list.fecha.dia }} - {{ list.fecha.hora }}hs
    </p>
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
  margin: 0;
}

.card-item {
  width: 250px; /* Ajustar el tamaño de las tarjetas */
  min-width: 250px;
  padding: 20px;
  background-color: #f4f4f43a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  font-size: 16px;
}

.card-item span {
  display: block;
  font-size: 22px; /* Ajustar el tamaño del texto */
  font-weight: bold;
  margin-top: 5px;
}

.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Información de la fecha */
.date-info {
  text-align: center;
  color: #33ff33;
  font-size: 16px;
  margin-top: 20px;
}
</style>
