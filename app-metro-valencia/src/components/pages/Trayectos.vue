<template>
  <div class="page--trayectos">
    <section class="formulario">
      <div class="formulario--contenedor">
        <div class="contenedor--icono-trayecto">
          <img class="img-fluid" src="static/img/trayectos/trayecto.svg" alt="Icono de Trayectos">
        </div>
        <div class="contenedor--form">
          <form>
            <input class="form-control" type="text" placeholder="">
            <input class="form-control" type="text" placeholder="">
          </form>
        </div>
        <div class="contenedor--icono-flechas">
          <img src="static/img/trayectos/doble-flecha.svg" alt="Icono de docle Flecha">
        </div>
      </div>
    </section>
    <section class="favoritos">
    </section>
    <section class="historial"></section>
    <h1>Hola a todos</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTrayectos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
