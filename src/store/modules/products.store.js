
import api from "../../helpers/axios"

const actions = {
   fetchProducts: async ({ commit }) => {
      let { data } = await api.get("products")
      !data.error && commit("setState", { randomProducts: data.data })
   }
}

const mutations = {
   setState: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   },
   resetState: (state) => {
      let newState = initialState()
      Object.keys(newState).forEach(key => newState[key] = state[key])
   }
}

const initialState = () => ({
   randomProducts: []
})
const state = initialState()

const getters = {
   all: state => state.randomProducts,
   daraz: state => state.randomProducts.filter(d => d.website === "Daraz"),
   pickaboo: state => state.randomProducts.filter(p => p.website === "Pickaboo"),
   ajkerdeal: state => state.randomProducts.filter(a => a.website === "Ajkerdeal")
}

export default {
   namespaced: true,
   actions, mutations, state, getters
}


