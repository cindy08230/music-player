// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/music-player/:type'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
