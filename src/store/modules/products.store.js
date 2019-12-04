
import api from "../../helpers/axios"
import router from "@/router"


const actions = {
   fetchProducts: async ({ commit }) => {
      let { data } = await api.get("products")
      console.log(data);
      !data.error && commit("setState", { randomProducts: data.data })
   },
   fetchSelectCat: async ({commit}, catTitle)=>{
      router.currentRoute.name !== 'category' && router.push("/category")
      const response = await api.get(`products?cat=${catTitle}`)
      commit("setState",{ categoryProducts:response.data})
      //console.log(response.data)

   },
   selectCatProduct:(state,setCat)=>{
      state.selectCat= setCat; 
   },
   cmpProducts: async ({commit},cmpProductsTitle)=>{
      
      const response2 = await api.get(`compare/${cmpProductsTitle}`) 
      commit("setState",{cmpProducts:response2.data})
      console.log(response2.data)
   },
   setCmpProductsTitle:(state,setCmpTitle)=>{
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
   categoryProducts: [],
   cmpProducts:[]
})
const state = initialState()

const getters = {
   all: state => state.randomProducts,
   daraz: state => state.randomProducts.filter(d => d.website === "Daraz"),
   pickaboo: state => state.randomProducts.filter(p => p.website === "Pickaboo"),
   ajkerdeal: state => state.randomProducts.filter(a => a.website === "Ajkerdeal"),
  
   CatProducts: state=> state.categoryProducts,
   setCmpProducts: state=>state.cmpProducts
   
}

export default {
   namespaced: true,
   actions, mutations, state, getters
}


