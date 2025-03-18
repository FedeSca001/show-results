<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const list = ref([]);
const isLoading = ref(true);
const url = 'https://bot-scraping.onrender.com' + '/calendarioMotoGp';
const getData = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(url);
    list.value = data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(getData);
</script>

<template>
  <main>
    <h2>Calendario MotoGP</h2>
    <div v-if="isLoading" class="spinner"></div>
    <ul v-else-if="list.length > 0" class="card-list">
      <li v-for="(item, index) in list" :key="index" class="card-item">

        <div class="card-container">
          <div class="parte-izquierda">
            <img :src="item.imgCircuito" :alt="item.circuito" class="circuit-img" />
            <h3>{{ item.granPremio }}</h3>

          </div>
          <!-- Renderización del Podium -->
          <div class="parte-derecha podium" v-if="item.podium[1]">
            <p><strong>Circuito:</strong> {{ item.circuito }}</p>
            <p><strong>Fecha:</strong> {{ item.fecha }}</p>
            <ul>
              <li v-for="(podium, idx) in item.podium" :key="idx" class="podium-item">
                <img :src="podium.bandera" :alt="podium.piloto" class="flag-icon" />
                <span class="podium-carrera">{{ podium.position }}: {{ podium.piloto }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Tablas de Eventos MotoGP, Moto2 y Moto3 -->
        <div class="competitions" v-if="item.podium[1]">
          <h4>Eventos MotoGP</h4>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Evento</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(competition, idx) in item.competiciones.motoGp" :key="idx">
                <td>{{ competition.dia }}</td>
                <td>
                  <a :href="competition.link" target="_blank">{{ competition.descripcion }}</a>
                </td>
                <td>{{ competition.hora }}</td>
              </tr>
            </tbody>
          </table>

          <h4>Eventos Moto2</h4>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Evento</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(competition, idx) in item.competiciones.moto2" :key="idx">
                <td>{{ competition.dia }}</td>
                <td>
                  <a :href="competition.link" target="_blank">{{ competition.descripcion }}</a>
                </td>
                <td>{{ competition.hora }}</td>
              </tr>
            </tbody>
          </table>

          <h4>Eventos Moto3</h4>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Evento</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(competition, idx) in item.competiciones.moto3" :key="idx">
                <td>{{ competition.dia }}</td>
                <td>
                  <a :href="competition.link" target="_blank">{{ competition.descripcion }}</a>
                </td>
                <td>{{ competition.hora }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <p><strong>Circuito:</strong> {{ item.circuito }}</p>
          <p><strong>Fecha:</strong> {{ item.fecha }}</p>
        </div>
      </li>
    </ul>
    <p v-else>No se encontraron datos.</p>
  </main>
</template>

<style scoped>
/* General styles */
h2 {
  margin-bottom: 20px;
  font-size: 12pt;
  color: #333;
}

.spinner {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 4px solid #ddd;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Card styles */
.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-item {
  background-color: #fffdfd;
  width: 80%;
  font-size: 10pt;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.circuit-img {
  width: 40%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}
.podium-carrera{
  margin-left: 5px;
    font-size: 11pt;
    font-weight: bold;
    color: black;
}
h3 {
  color: #013165;
  font-size: 16pt;
  margin: 10px 0;
}
h4{
    color: #007bff;
}

p {
  font-size: 12pt;
  color: #555;
  margin: 5px 0;
}

strong {
  color: #333;
  font-size: 10pt;
}

/* Podium styles */
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  gap: 20px;
}

.parte-izquierda {
  flex: 1; /* Ocupa el 50% del espacio */

}

.parte-derecha {
  flex: 1; /* Ocupa el 50% del espacio */
}

.circuit-img {
  width: 100%; /* La imagen ocupa todo el ancho */
  max-width: 400px; /* Evita que se agrande demasiado */
  border-radius: 8px;
  margin-bottom: 10px;
}

.podium {
  padding: 10px;
  border-radius: 8px;
  border: solid rgb(0, 97, 24) 1.5px;
}

.podium ul {
  list-style: none;
  padding: 0;
}

.podium-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 5px;
}

.flag-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

/* Competitions table styles */
.competitions {
  margin-top: 20px;
}

table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
}

th, td {
  font-size: 9pt;
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
  color: #333;
}

th {
  background-color: #009f10;
  color: #fffdfd;
}

td a {
  color: #007bff;
  text-decoration: none;
  font-size: 9pt;
}

td a:hover {
  text-decoration: underline;
}
</style>
