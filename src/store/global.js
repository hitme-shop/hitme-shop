
const actions = {
   init: ({ dispatch ,state}) => {
      dispatch("Categories/fetchCategories")
      dispatch("Sliders/fetchSliders")
      dispatch("Products/fetchProducts")
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
   sidebar: "expanded"
})
const state = initialState()

const getters = {
   sidebar: state => state.sidebar
}

export default {
   actions, mutations, state, getters
}