
import api from "../../helpers/axios"
import axios from "axios"
import router from "../../router"

const actions = {
   fetchCategories: async ({ commit }) => {
      let res = await api.get("categories")
      !res.error && commit("setState", { categories: res.data })
      console.log(res.data)
   },
   
}

const mutations = {
   setState: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   },
   resetState: (state) => {
      let newState = initialState()
      Object.keys(newState).forEach(key => state[key] = newState[key])
   },
   selectCatProduct:(state,setCat)=>{
      state.selectCat= setCat; 
   }
}

const initialState = () => ({
   categories: [],
   selectCat: []
})
const state = initialState()

const getters = {
   categories: state => state.categories
}

export default {
   namespaced: true,
   actions, mutations, state, getters
}