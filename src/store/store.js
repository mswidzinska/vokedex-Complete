import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// this is a nice trick that webpack helps you to build certain value's for a specific build
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
})
