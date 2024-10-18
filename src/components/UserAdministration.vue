<script setup>
import { ref } from 'vue';
import UserLog from './UserLog.vue';
import UserRegister from './UserRegister.vue';
const condition = ref('');
function selectParam(input) {
    condition.value=input
}
</script>

<template>
    <p>El usuario no se encuentra logueado, ustede debe:</p>
    <div class="box-btn">
        <button @click="selectParam('login')" class="btn-log">Login</button>
        <button @click="selectParam('register')" class="btn-register">Register</button>
    </div>
    <div class="box-adminits">
        <UserLog v-if="condition === 'login'" />
        <UserRegister v-if="condition === 'register'" />
    </div>
</template>

<style scoped>

/* Estilo para el contenedor principal */
.box-adminits {
  width: 60%;
  min-height: 60vh;
  margin: 30px auto;
  padding: 20px;
  transition: 0.3s ease;
}


/* Estilo para el contenedor de los botones */
.box-btn {
  text-align: center;
  margin-bottom: 20px;
}

/* Estilo para los botones */
button {
  padding: 12px 30px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  margin: 0 10px;
  width: 150px;
  letter-spacing: 0.5px;
}

/* Botón de login */
.btn-log {
  background-color: #33ff3385;
  color: white;
}

.btn-log:hover {
  background-color: #15871585;
  border-color: #b2ebf2;
  transform: scale(1.05);
}

/* Botón de registro */
.btn-register {
  background-color: #9c0000;
  color: #dfd4d1;
}

.btn-register:hover {
  background-color: #f73c3c;
  border-color: #dbb6ab;
  transform: scale(1.05); 
}

/* Espacio entre los botones */
button + button {
  margin-left: 20px;
}

/* Ajustes responsivos para pantallas pequeñas */
@media (max-width: 768px) {
  .box-adminits {
    width: 90%;
    min-height: auto;
  }

  button {
    width: 100%;
    margin: 10px 0;
  }

  button + button {
    margin-left: 0;
  }
}
</style>
