<template>
  <div class="page--home">
    <div class="home--brand">
      <img class="brand--img" src="/static/img/home/logo.svg" alt="Logo">
    </div>
    <nav>
      <ul>
        <li>
            <router-link :to="{ name: 'trayectos'}">
              <span class="nav--icono">
                <i class="fas fa-subway"></i>
              </span>
              <p>Trayecto</p>
            </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'tarjetas'}">
            <span class="nav--icono">
              <i class="far fa-credit-card"></i>
            </span>
            <p>Tarjetas</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'mapas'}">
            <span class="nav--icono">
              <i class="fas fa-map"></i>
            </span>
            <p>Mapas</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'tarifas'}">
            <span class="nav--icono">
              <i class="fas fa-money-bill-wave"></i>
            </span>
            <p>Tarifas</p>
          </router-link>
        </li>
        <li>
          <a href="">
            <span class="nav--icono">
              <i class="fas fa-address-book"></i>
            </span>
          <p>Créditos</p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
    }
  }
}
</script>
