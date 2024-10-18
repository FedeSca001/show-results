<script setup>
import axios from 'axios';
import { ref } from 'vue';

let user = ref('');
let password = ref('');
let mail = ref('');

async function submitInfo(e) {
    e.preventDefault();
    
    // Validación de campos vacíos
    if (!user.value || !password.value || !mail.value) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Validación de formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(mail.value)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    
    try {
        // Hacemos la llamada API con axios
        const response = await axios.post('https://bot-scraping.onrender.com/user/new', {
            user: user.value,
            pass: password.value,
            mail: mail.value
        });

        // Almacenar información del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        
        // Recargar la página
        location.reload(); // Esto recargará la página actual

    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Ocurrió un error al realizar la solicitud. Por favor, intenta de nuevo.');
    }
}

function pressEnter(e) {
    if (e.key === 'Enter') {
        submitInfo(e);
    }
}
</script>

<template>
    <div class="form-container" @keydown="pressEnter">
        <form action="submit" class="form-content" @submit="submitInfo">
            <label for="username">Username</label>
            <input type="text" id="username" class="input-field" v-model="user" placeholder="Enter your username" required>
            <label for="password">Password</label>
            <input type="password" id="password" class="input-field" v-model="password" placeholder="Enter your password" required>
            <label for="email">Mail</label>
            <input type="email" id="email" class="input-field" v-model="mail" placeholder="Enter your email" required>

            <button type="submit" class="submit-btn">Submit</button>
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
    max-width: 400px; /* Máximo ancho del formulario */
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
