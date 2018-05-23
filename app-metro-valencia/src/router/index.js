import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/pages/Home'
import PageTarjetas from '@/components/pages/Tarjetas'
import PageTrayectos from '@/components/pages/Trayectos'
import PageHorarios from '@/components/pages/Mostrar_horarios'
import PageMapas from '@/components/pages/Mapas'
import PageTarifas from '@/components/pages/Tarifas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/tarjetas',
      name: 'tarjetas',
      component: PageTarjetas
    },
    {
      path: '/trayectos',
      name: 'trayectos',
      component: PageTrayectos
    },
    {
      path: '/horarios',
      name: 'horarios',
      component: PageHorarios
    },
    {
      path: '/mapas',
      name: 'mapas',
      component: PageMapas
    },
    {
      path: '/tarifas',
      name: 'tarifas',
      component: PageTarifas
    }
  ]
})
