
import Vue from 'vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter,ElementUI)

 new Vue({
  el: '#app',
  render: h => h(App)
})



/*8const app = new Vue({
  router
}).$mount('#app')**/
