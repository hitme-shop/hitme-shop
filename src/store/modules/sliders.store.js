
import api from "../../helpers/axios"

const actions = {
   fetchSliders: async ({ commit }) => {
      let res = await api.get("sliders")
      !res.error && commit("setState", { sliders: res.data })
   }
}

const mutations = {
   setState: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   },
   resetState: (state) => {
      let newState = initialState()
      Object.keys(newState).forEach(key => state[key] = newState[key])
   }
}

const initialState = () => ({
   sliders: []
})
const state = initialState()

const getters = {
   daraz: state => state.sliders.filter(s => s.website === "Daraz"),
   pickaboo: state => state.sliders.filter(s => s.website === "Pickaboo"),
   ajkerdeal: state => state.sliders.filter(s => s.website === "Ajkerdeal")
}

export default {
   namespaced: true,
   actions, mutations, state, getters
}