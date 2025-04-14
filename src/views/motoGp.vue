<template>
  <div class="grid-container">
    <div class="section-select">
      <RouterLink to="/motogp/motogp">Moto GP</RouterLink>
      <RouterLink to="/motogp/motoGpDiarioAs">Moto GP Diario AS</RouterLink>
      <RouterLink to="/motogp/motoGpMarca">Moto GP Marca</RouterLink>
      <RouterLink to="/motogp/motogpmotorsport">Moto GP Motorsport</RouterLink>
      <RouterLink to="/motogp/clasificacionMotogp">Clasificación MotoGP</RouterLink>
      <RouterLink to="/motogp/calendarioMotoGp">Calendario MotoGP</RouterLink>
    </div>
    <div class="section-vistas">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  gap: 10px;
  padding: 10px;
  grid-template:
    "btns" auto
    "vistas" 1fr;
}

.section-select {
  background-color: rgb(161, 46, 0);
  font-size: 18pt;
  grid-area: btns;
  align-content: start;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 15px;
  justify-content: center;
}
.section-select a {
  padding: 5px;
}
.section-select a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  transition: background-color 0.9s;
}

.section-vistas {
  grid-area: vistas;
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template:
      "btns vistas" 100vh/
      15% 85%; /* Ancho fijo para btns, vistas toma el resto */
    height: 100vh; /* Altura total para evitar crecer más allá */
  }

  .section-select {
    flex-direction: column;
    height: 400px;         /* Alto fijo */
    overflow-y: auto;      /* Scroll si los botones superan el alto */
    justify-content: flex-start; /* Muy importante: los deja arriba */
  }
}
</style>
