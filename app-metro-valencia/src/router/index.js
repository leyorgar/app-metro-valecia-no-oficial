import Vue from 'vue'
import Router from 'vue-router'
import PageTrayectos from '@/components/pages/Trayectos'
import PageTarjetas from '@/components/pages/Tarjetas'

Vue.use(Router)

export default new Router({
  routes: [
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
