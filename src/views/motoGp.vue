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
  grid-area: btns;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
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
      "btns vistas" auto/
      15% 85%;
  }

  .section-select {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
