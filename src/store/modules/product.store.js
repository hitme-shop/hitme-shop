
import api from "../../helpers/axios"

const actions = {
   fetchProducts: async ({ commit }) => {
      let res = await api.get("products")
      !res.error && commit("setState", { randomProducts: res.data })
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
   darazProducts: state => state.product.filter(d => d.website === "Daraz"),
   PickabooProducts: state => state.product.filter(p => p.website === "Pickaboo"),
   AjkerdealProducts: state => state.product.filter(a => a.website === "ajkerdeal")

}

export default {
   namespaced: true,
   actions, mutations, state, getters
}


