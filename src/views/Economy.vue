<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="section-select">
        <RouterLink to="/cambioDeMoneda">Cambio de Moneda</RouterLink>
        <RouterLink to="/crypto">Cripto</RouterLink>
    </div>
    <RouterView />
</template>

<style scoped>

</style>