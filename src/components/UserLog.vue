<script setup>
import bcryptjs from 'bcryptjs'
import { ref } from 'vue';

// Campos de entrada del usuario
const user = ref('');
const pass = ref('');
const hashedPass = ref('');

// Obtener el valor del usuario almacenado en localStorage
const storedUser = JSON.parse(localStorage.getItem('user'));

// Asignar el hash de la contraseña desde localStorage si existe
if (storedUser && storedUser.pass) {
    hashedPass.value = storedUser.pass;
} else {
    console.warn('No se encontró un hash de contraseña en localStorage.');
}

async function logUser(e) {
    e.preventDefault();
    
    // Validación de campos vacíos
    if (!user.value || !pass.value || !hashedPass.value) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar la contraseña usando bcryptjs en el frontend
    const passwordMatch = await bcryptjs.compare(pass.value, hashedPass.value);
    
    if (passwordMatch) {
        const userData = { ...storedUser, logued: true };
        localStorage.setItem('user', JSON.stringify(userData));
        location.reload();
    } else {
        alert('Contraseña incorrecta.');
    }
}

// Función para enviar el formulario con Enter
function pressEnter(e) {
    if (e.key === 'Enter') {
        logUser(e);
    }
}
</script>

<template>
    <div class="form-container">
        <form @submit="logUser" @keypress='pressEnter' class="form-content">
            <label for="user">Usuario</label>
            <input type="text" id="user" class="input-field" v-model="user" placeholder="Enter your username" required />
            
            <label for="pass">Contraseña</label>
            <input type="password" id="pass" class="input-field" v-model="pass" placeholder="Enter your password" required />

            <button type="submit" class="submit-btn">Iniciar Sesión</button>
        </form>
    </div>
</template>

<style scoped>
/* Estilo para centrar el formulario */
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 25px;
    height: 60vh;
}

/* Estilo del contenido del formulario */
.form-content {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
}

/* Estilo de las etiquetas */
label {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-bottom: 8px;
    color: #333333;
}

/* Estilo de los campos de texto */
.input-field {
    padding: 12px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #cccccc;
    margin-bottom: 20px;
    outline: none;
    transition: border-color 0.3s ease;
}

/* Efecto hover y focus para los campos de texto */
.input-field:focus {
    border-color: #00796b;
}

/* Estilo del botón de envío */
.submit-btn {
    background-color: #00796b;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Efecto hover para el botón */
.submit-btn:hover {
    background-color: #004d40;
    transform: scale(1.05);
}
</style>
