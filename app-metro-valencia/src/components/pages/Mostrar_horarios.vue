<template>
  <div class="page--mostrar-horarios">
    <section class="horarios--texto">
      <h1>Mostrar rutas</h1>
    </section>
    <section class="horarios--favoritos">
      <div class="ruta">
        <div class="ruta-inicio">
          <p>Ruta de inicio</p>
          <p class="zona">Zona A</p>
        </div>
        <div class="ruta-fin">
          <p>Ruta de fin</p>
          <p class="zona">Zona B</p>
        </div>
      </div>
      <div class="favorito">
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.24 24.18"><defs></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path id="_Path_" data-name="&lt;Path&gt;" class="cls-1" d="M12.62.75c2.06,0,2,6.19,3.65,7.4s7.53-.78,8.17,1.19-5.27,3.8-5.91,5.76,3.07,6.92,1.4,8.14-5.24-3.84-7.31-3.84S7,24.45,5.31,23.24s2-6.17,1.4-8.14S.16,11.3.8,9.34,7.3,9.37,9,8.15,10.56.75,12.62.75Z"/></g></g></svg>
        </button>
      </div>
    </section>
    <section class="horarios--rutas">
      <button>RUTA 1</button>
      <button class="inactivo">RUTA 2</button>
    </section>
    <section class="horarios--direccion">
      <div class="direccion--linea">
        Ruta de inicio - Trasbordo 1
        <div class="linea">1</div>
      </div>
      <div class="direccion--linea">
        Trasbordo 1 - Ruta de fin
        <div class="linea">1</div>
      </div>
      <div class="direccion--linea">
        Trasbordo 1 - Ruta de fin
        <div class="linea">1</div>
      </div>
    </section>
    <section class="horarios--titulo">
      Horarios
    </section>
    <section class="horarios--tabla">
      <table class="table">
          <tr>
            <th>Salida</th>
            <th>Llegada</th>
            <th>Salida</th>
            <th>Llegada</th>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
          <tr>
            <td>8.15</td>
            <td>8.25</td>
            <td>8.15</td>
            <td>8.25</td>
          </tr>
        </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageHorarios',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
