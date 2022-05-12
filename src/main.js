import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import NProgress from 'nprogress'
import { routes } from './routes'
import ToggleSwitch from 'vuejs-toggle-switch'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import pagination from 'laravel-vue-pagination'
import vSelect from 'vue-select'
// import "vue-select/dist/vue-select.css";
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'vue-loaders/dist/vue-loaders.css'
import VueLoaders from 'vue-loaders'

import '@space-css/space-css/space.min.css'

// Paper Dependencies
import './assets/css/_init.css'
import './assets/js/_init'

//Helpers
import './helpers/filters'
import store from './store/index'

//Globals
import './globals'

//Module Registration
Vue.use(VueTelInput)
Vue.use(VueRouter)
Vue.use(axios)
Vue.use(ToggleSwitch)
Vue.use(VueToast)
Vue.use(Vuelidate)
Vue.use(VueLoaders)
Vue.component('pagination', pagination)
Vue.use(NProgress)
NProgress.configure({ easing: 'ease', showSpinner: true })
Vue.component('v-select', vSelect)
const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

function isLoggedIn() {
  return localStorage.getItem('token')
}

function isRoleGuard() {
  return localStorage.getItem('role')
}

function isOTPVerified() {
  return localStorage.getItem('otp_vrd')
}

router.beforeEach((to, from, next) => {
  /* -------------- Ensure we checked auth before each page load. ------------- */
  if (to.name) {
    NProgress.start()
    if (to.matched.some((record) => record.meta.authOnly)) {
      return next({
        path: '/security/main-site/maintenance',
      })
    } else if (to.matched.some((record) => record.meta.guestOnly)) {
      return next({
        path: '/security/main-site/maintenance',
      })
    } else {
      next()
    }
  }
})

router.afterEach((to) => {
  if (to.name) {
    // Complete the animation of the route progress bar.
    NProgress.done()
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
