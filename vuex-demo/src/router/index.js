import Vue from 'vue'
import Router from 'vue-router'
function Load (route) {
  return () => import('@/components/' + route)
}

Vue.use(Router)

export default new Router({
  'mode': 'history',
  routes: [
    {
      path: '/vuexDemo',
      name: 'VuexDemo',
      component: Load('VuexDemo')
    }
  ]
})
