<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// Definir la referencia para almacenar la lista y el estado de carga
const list = ref([]);
const isLoading = ref(true);
const url = 'https://bot-scraping.onrender.com';

// Función para obtener datos de MotoGP
const getData = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(url+ '/clasificacionMotogp');
    list.value = data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false;
  }
};

// Función para obtener datos de Moto2
const getDataMoto2 = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(url+'/clasificacionMotogp/moto2');
    list.value = data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false;
  }
};

// Función para obtener datos de Moto3
const getDataMoto3 = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(url+'/clasificacionMotogp/moto3');
    list.value = data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false;
  }
};

// Cargar datos de MotoGP al montar el componente
onMounted(getData);
</script>

<template>
  <main>
    <h2>Clasificación del Campeonato MotoGP</h2>

    <!-- Botones para cambiar entre categorías -->
    <div class="button-group">
      <button @click="getData" :disabled="isLoading">Clasificación MotoGP</button>
      <button @click="getDataMoto2" :disabled="isLoading">Clasificación Moto2</button>
      <button @click="getDataMoto3" :disabled="isLoading">Clasificación Moto3</button>
    </div>

    <!-- Spinner para cuando está cargando -->
    <div v-if="isLoading" class="spinner"></div>

    <!-- Lista de clasificaciones -->
    <ul v-else-if="list.length > 0" class="table-list">
      <li v-for="(item, index) in list" :key="index" class="table-row">
        <div class="table-cell posicion">{{ item.posicion }}</div>
        <div class="table-cell piloto">{{ item.piloto }}</div>
        <div class="table-cell puntos">{{ item.puntos }} pts <span class="diferencia-puntos">(-{{ list[0].puntos - item.puntos }})</span></div>
      </li>
    </ul>

    <!-- Mensaje cuando no se encuentran datos -->
    <p v-else>No se encontraron datos.</p>
  </main>
</template>

<style scoped>
/*  */
.diferencia-puntos{
  color: red;
  font-size: 10pt;
}
/* Estilo del título */
h2 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  text-align: center;
  font-weight: bold;
}

/* Grupo de botones */
.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

/* Estilo de los botones */
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
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

/* Lista de la tabla */
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
  flex-basis: 33%;
  text-align: center;
}

/* Columna de posición */
.posicion {
  font-weight: bold;
  color: #ef0014;
  font-size: 20px;
}

/* Columna de piloto */
.piloto {
  font-weight: 600;
  color: #333;
  text-align: left;
}

/* Columna de puntos */
.puntos {
  background-color: #e9ecef;
  border-radius: 5px;
  font-weight: bold;
  color: #007bff;
}
</style>
