import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"

/** Global store */
import global from "./global"
/** Modules */
import modules from "./modules/_exporter"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({

  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  /** Root Store */
  actions: global.actions,
  mutations: global.mutations,
  state: global.state,
  getters: global.getters,

})