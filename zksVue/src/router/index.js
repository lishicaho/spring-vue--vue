import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import TWO from '../TWO'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/two',
      name: 'TWO',
      component: TWO
    }
  ]
})
