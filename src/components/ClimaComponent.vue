<script setup>
import axios from 'axios';
import { ref } from 'vue';

// Definir referencias para almacenar los datos y el estado de carga
const list = ref(null);
const isLoading = ref(false);
const inputClima = ref('');

// Función para obtener datos meteorológicos de la ciudad ingresada
const getData = async () => {
  isLoading.value = true; // Iniciar carga
  try {
    const { data } = await axios.get(`https://bot-scraping.onrender.com/climaWeatherapi/${inputClima.value}`);
    list.value = data; // Asignar datos de respuesta a la lista
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false; // Finalizar carga
  }
};
</script>

<template>
  <div class="weather-bar">
    <input type="text" v-model="inputClima" placeholder="Ciudad" @keyup.enter="getData" />
    <button type="button" @click="getData">Buscar</button>

    <div v-if="isLoading" class="spinner"></div>

    <div v-if="list && !isLoading" class="weather-info">
      <p>Ubicación: <span>{{ list.ubicacion }}</span></p>
      <p>Temp: <span>{{ list.temperatura }}°C</span></p>
      <p>Viento: <span>{{ list.viento }} kph</span></p>
      <p>Condición: <span>{{ list.condicion }}</span></p>
    </div>
  </div>
</template>

<style scoped>
/* Barra de clima alineada en un solo renglón */
.weather-bar {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #2d2d2d;
  color: #f0f0f0;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

/* Estilo para el campo de entrada */
input[type="text"] {
  padding: 5px;
  font-size: 14px;
  flex: 1;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #3b3b3b;
  color: #f0f0f0;
  margin-right: 8px;
  max-width: 28%;
}

input[type="text"]::placeholder {
  color: #999;
}

/* Estilo para el botón */
button {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  color: #f0f0f0;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

button:hover {
  background-color: #0056b3;
}

/* Spinner para el estado de carga */
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Información meteorológica */
.weather-info {
  display: flex;
  gap: 16px; /* Espacio entre los elementos */
  font-size: 12px; /* Tamaño de fuente más pequeño */
  align-items: center;
  flex-wrap: wrap; /* Para que se ajuste si la pantalla es pequeña */
}

.weather-info p {
  margin: 0;
  display: flex;
  align-items: center;
  flex: 1;
  white-space: nowrap; /* Evitar que el texto se divida en dos líneas */
}

.weather-info span {
  font-size: 14px;
  font-weight: bold;
  color: #33ff33;
  margin-left: 8px;
}
</style>
