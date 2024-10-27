<script setup>
import { ref, onMounted } from 'vue'

// Simulación de un objeto JSON para mostrar en la animación
const jsonContent = ref(`{
  "welcomeMessage": "Bienvenido a tu fuente de noticias",
  "description": "Cobertura de temas populares de hoy",
  "categories": ["Moto Gp", "Fórmula 1", "Cryptomonedas", "Cotizaciones", "Clima"],
  "popularTopics": ["Deporte", "Entretenimiento", "Economía global"],
  "status": "En funcionamiento",
}`);

const displayedContent = ref('');
let index = 0;

const typeJSON = () => {
  if (index < jsonContent.value.length) {
    displayedContent.value += jsonContent.value.charAt(index);
    index++;
    setTimeout(typeJSON, 50); // Ajusta la velocidad de la animación
  } else {
    // Esperar 5 segundos y reiniciar la animación
    setTimeout(() => {
      resetAnimation();
    }, 5000);
  }
};

const resetAnimation = () => {
  displayedContent.value = ''; // Limpiar el contenido
  index = 0; // Reiniciar el índice
  typeJSON(); // Volver a empezar la animación
};

// Ejecutar la animación cuando el componente se monte
onMounted(() => {
  typeJSON();
});
</script>

<template>
  <main>
    <h2>Welcome to the JSON World</h2>
    <pre class="json-animation">
      {{ displayedContent }}
    </pre>
  </main>
</template>

<style scoped>
main {
  font-family: monospace;
  margin-top: 50px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: rgb(91, 90, 90)}

pre.json-animation {
  width: 80%;
  margin: 0 auto;
  background-color: #2d2d2d;
  color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  font-size: 14pt;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  white-space: pre-wrap;
  word-wrap: break-word;
  border: 1px solid #333;
}

/* Añadir efecto de parpadeo al cursor */
pre.json-animation::after {
  content: "|";
  animation: blink 1s step-start infinite;
  color: whitesmoke;
  margin-left: 5px;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
