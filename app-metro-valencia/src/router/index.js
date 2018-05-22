import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/pages/Home'
import PageHorarios from '@/components/pages/Mostrar_horarios'
import PageMapas from '@/components/pages/Mapas'
import PageTrayectos from '@/components/pages/Trayectos'
import PageTarjetas from '@/components/pages/Tarjetas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
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
      path: '/trayectos',
      name: 'trayectos',
      component: PageTrayectos
    },
    {
      path: '/tarjetas',
      name: 'tarjetas',
      component: PageTarjetas
    }
  ]
})
