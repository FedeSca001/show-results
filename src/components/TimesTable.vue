<template>
    <div 
    class="floating-table">
    <!-- Spinner de carga -->
    <div v-if="isLoading" class="spinner"></div>

    <!-- Tabla de tiempos -->
    <table v-else class="times-table">
        <thead class="table-header">
        <tr>
            <th class="header-cell">Piloto</th>
            <th class="header-cell">Tiempo</th>
        </tr>
        </thead>
        <tbody class="table-body">
        <tr v-for="(item, idx) in lista" :key="idx" class="table-row">
            <td class="cell">{{ item.nombre }}</td>
            <td class="cell">{{ item.tiempo }}</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>
  
  <script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  const lista = ref([]);
  const isLoading = ref(true);
  
  const props = defineProps({
    data: {
      type: String,
      required: true
    }
  });
  


  // Obtener datos de la API
  const getTimeTable = async (url) => {
    try {
      const response = await axios.get(
        `http://localhost:5050/timeTable?url=${encodeURIComponent(url)}`
      );
      lista.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      isLoading.value = false;
    }
  };
  
onMounted(() => {
    getTimeTable(props.data.url);
  });
  </script>
  
  <style scoped>
  .floating-table {
    position: absolute;
    z-index: 9999;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    padding: 12px;
    max-width: 300px;
    max-height: 400px;
    overflow-y: auto;
    pointer-events: auto;
  }
  
  .times-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }
  
  .table-header {
    background-color: #009f10;
    color: white;
  }
  
  .header-cell {
    padding: 8px 12px;
    text-align: left;
  }
  
  .table-body {
    font-size: 13px;
  }
  
  .table-row:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .cell {
    padding: 8px 12px;
    border-bottom: 1px solid #eee;
  }
  
  /* Spinner */
  .spinner {
    margin: 10px auto;
    width: 30px;
    height: 30px;
    border: 3px solid #ddd;
    border-top: 3px solid #009f10;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>