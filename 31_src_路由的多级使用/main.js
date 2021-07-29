//引入Vue
import Vue from "vue"
import App from "./App.vue"
//引入vue-router
import VueRouter from 'vue-router'
//引入router
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el:'#app',
  render: h => h(App),
  router
})

