
import api from "../../helpers/axios"

const actions = {
   fetchCategories: async ({ commit }) => {
      let res = await api.get("categories")
      !res.error && commit("setState", { categories: res.data })
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
   categories: []
})
const state = initialState()

const getters = {
   categories: state => state.categories
}

export default {
   namespaced: true,
   actions, mutations, state, getters
}