<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const list = ref([]);
const isLoading = ref(true);

const getData = async () => {
  isLoading.value = true;
  try {
    const { data } = await axios.get('https://bot-scraping.onrender.com/calendarioMotoGp');
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
        <img :src="item.imgCircuito" :alt="item.circuito" class="circuit-img" />
        <h3>{{ item.granPremio }}</h3>
        <p><strong>Circuito:</strong> {{ item.circuito }}</p>
        <p><strong>Fecha:</strong> {{ item.fecha }}</p>

        <!-- Renderización del Podium -->
        <div class="podium">
          <ul>
            <li v-for="(podium, idx) in item.podium" :key="idx" class="podium-item">
              <img :src="podium.bandera" :alt="podium.piloto" class="flag-icon" />
              <span class="podium-carrera">{{ podium.position }}: {{ podium.piloto }}</span>
            </li>
          </ul>
        </div>

        <!-- Tablas de Eventos MotoGP, Moto2 y Moto3 -->
        <div class="competitions">
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
  width: 60%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}
.podium-carrera{
    font-size: 11pt;
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
.podium {
  margin-top: 10px;
}

.podium ul {
  list-style: none;
  padding: 0;
}

.podium-item {
  color: black;
  display: flex;
  margin-bottom: 5px;
}

.flag-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
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
