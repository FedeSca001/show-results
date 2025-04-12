<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="section-select">
        <RouterLink to="/formula1/formula1Oficial">F1 Oficial</RouterLink>
        <RouterLink to="/formula1/formula1DiarioAS">F1 Diario AS</RouterLink>
        <RouterLink to="/formula1/formula1Clasificacion">Clasificaciones</RouterLink>
    </div>
    <RouterView />
</template>

<style scoped>

</style>