import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import user from './modules/user'
import other from './modules/other'
import withdrawal from './modules/withdrawal'
import investment from './modules/investment'

export default new Vuex.Store({
  modules: {
    user,
    other,
    withdrawal,
    investment,
  },
})
