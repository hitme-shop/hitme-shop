
import api from "../../helpers/axios"
import router from "@/router"


const actions = {
   fetchProducts: async ({ commit }) => {
      let { data } = await api.get("products?format=website")
      console.log(data);
      !data.error && commit("setState", { randomProducts: data.data })
   },
   fetchSearchedProducts: async ({ commit }, keyword) => {
      keyword = keyword.replace("/", " ")
      commit("setState", { searchSuggestions: [] })
      router.currentRoute.name !== 'search' && router.push("/search")
      let { data } = await api.get(`search/${keyword}`)
      data.status === 200 && commit("setState", { searchedProducts: data.data })
      data.status === 409 && commit("setState", { searchedProducts: [] })
   },
   fetchSearchSuggestions: async ({ commit }, keyword) => {
      let { data } = await api.get(`search/suggestions/${keyword}`)
      data.status === 200 && commit("setState", { searchSuggestions: data.data })
   },
   /** CATEGORY PRODUCTS */
   fetchCategoryProducts: async ({ commit }, p) => {
      router.currentRoute.path !== `category/${p.cat}` && router.push(`/category/${p.cat}`)
      const { data } = await api.get(`products?cat=${p.cat}&scat=${p.sCat}&mcat=${p.mCat}&format=website`);
      commit("setState", { categoryProducts: data.data })
   },
   fetchSelectCat: async ({ commit }, catTitle) => {
      router.currentRoute.name !== 'category' && router.push("/category")
      const response = await api.get(`products?cat=${catTitle}`)
      commit("setState", { categoryProducts: response.data })
   },
   selectCatProduct: (state, setCat) => {
      state.selectCat = setCat;
   },
   cmpProducts: async ({ commit }, cmpProductsTitle) => {
      const response2 = await api.get(`compare/${cmpProductsTitle}`)
      commit("setState", { cmpProducts: response2.data })
      console.log(response2.data)
   },
   setCmpProductsTitle: (state, setCmpTitle) => {
      state.cmpProducts = setCmpTitle;
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
   randomProducts: [],
   categoryProducts: {},
   cmpProducts: [],
   searchedProducts: [],

   searchSuggestions: []
})
const state = initialState()

const getters = {
   random: state => state.randomProducts,

   searchedProducts: state => state.searchedProducts,
   searchSuggestions: state => state.searchSuggestions,

   categoryProducts: state => state.categoryProducts,
   setCmpProducts: state => state.cmpProducts

}

export default {
   namespaced: true,
   actions, mutations, state, getters
}


