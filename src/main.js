import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import vueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {routes} from './routes.js'
import App from './App.vue'
import vueLazyload from 'vue-lazyload'

Vue.use(vueLazyload)
Vue.use(BootstrapVue)
Vue.use(vueRouter)
Vue.config.productionTip = false

const router = new vueRouter({
  mode: 'history',
  routes: routes()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
