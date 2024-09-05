<script setup>

</script>

<template>
  <main>
    <h2>Acerca de</h2>
    <p>
      Este proyecto tiene como objetivo crear una interfaz gráfica que permita a los usuarios visualizar datos obtenidos a través de un proceso de scraping desde diversas fuentes de información. El servidor, implementado en Node.js, realiza peticiones GET a sitios web de interés para extraer datos de monedas, criptomonedas y noticias relacionadas con el MotoGP, y luego expone estos datos a través de una API. Esta aplicación web consume la API y presenta los resultados de manera simple y accesible.
    </p>
    <h3>Propósito del Proyecto</h3>
    <p>
      La razón principal de este proyecto es ofrecer una forma visual y sencilla de interactuar con datos en tiempo real obtenidos mediante scraping, como cotizaciones de monedas o criptomonedas, y actualizaciones de noticias de MotoGP. 
      En lugar de depender de herramientas de desarrollador o solicitudes directas al servidor, los usuarios pueden consultar los datos fácilmente desde el navegador.
    </p>

    <h3>Tecnologías Utilizadas</h3>
    <ul>
      <li><strong>Node.js</strong> - Utilizado para crear el servidor que realiza el scraping y expone la API.</li>
      <li><strong>Express</strong> - Framework de Node.js que facilita la creación de la API y el manejo de rutas.</li>
      <li><strong>Cheerio</strong> - Biblioteca de scraping que permite extraer datos de HTML de manera eficiente.</li>
      <li><strong>Axios</strong> - Cliente HTTP utilizado para realizar las solicitudes GET a las fuentes de datos.</li>
      <li><strong>Vue.js</strong> - Framework JavaScript utilizado para construir la interfaz gráfica de la aplicación web.</li>
      <li><strong>Render.com</strong> - Plataforma utilizada para alojar y desplegar el servidor de la API.</li>
    </ul>

    <h3>Cómo Funciona</h3>
    <p>
      El servidor está diseñado para hacer scraping de diversas fuentes en tiempo real. Cada vez que un usuario realiza una solicitud a través de la aplicación web (como la consulta de una cotización de moneda o una noticia de MotoGP), el servidor envía una petición a las fuentes configuradas, extrae los datos necesarios, y los devuelve a la aplicación para ser visualizados.
    </p>
    <p>
      Esta arquitectura permite que los datos estén siempre actualizados y listos para ser mostrados de una manera intuitiva, sin que el usuario tenga que conocer detalles técnicos sobre cómo se realizan las peticiones o el scraping.
    </p>

    <h3>Sobre el Creador</h3>
    <p>
      El proyecto fue creado por FedeSca001, un desarrollador apasionado por la automatización y el scraping de datos, con el objetivo de proporcionar herramientas útiles para la obtención de información en tiempo real. Además de este proyecto, está interesado en el desarrollo backend y la creación de aplicaciones web interactivas.
    </p>

    <h3>Contribuciones</h3>
    <p>
      Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto o deseas corregir algún error, no dudes en abrir un issue o enviar un pull request en el repositorio oficial en GitHub. ¡Toda ayuda es apreciada!
    </p>

    <p>
      Repositorio del proyecto: <a href="https://github.com/FedeSca001/bot-scraping" target="_blank">GitHub - bot-scraping</a>
    </p>
  </main>
</template>

<style scoped>
/* Estilo básico para darle un buen formato a la página de "Acerca de" */
main {
  line-height: 1.6;
}

ul {
  margin: 20px 10%;
  padding-left: 20px;
  list-style-type: disc;
}

li {
  margin-bottom: 10px;
  font-size: 10pt;
}

h2, h3 {
  margin-top: 20px;
  margin-left: 20px;
}
h2{
  font-size: 20pt;
}
h3{
  font-size: 16pt;
}
</style>
