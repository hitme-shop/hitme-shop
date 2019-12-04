
// import api from "../../helpers/axios"
// import router from "@/router"

// const state = {
//     product: [],
//     searchTitle: ''

// }
// const mutations = {
//     findProducts: (state, product) => { state.product = product },
//     setTitle: (state, setProduct) => { state.searchTitle = setProduct },
// }
// const getters = {
//     allProducts: state => state.product,
// }
// const actions = {

//     async fetchData({ commit }, title) {
//         router.push("/search")
//         const response = await axios.get(`https://hitme-shop-api.herokuapp.com/v1/search/${title}`)
//         commit('findProducts', response.data)
//         // console.log(response.data)
//         console.log(response.data)

//     },
//     async fetchSuggestionData({ commit }, title) {
//         const res = await axios.get(`https://hitme-shop-api.herokuapp.com/v1/search/suggestions/${title}`)
//         commit('findProducts', res.data)
//         console.log(res.data)
//     }
// }

// export default {
//     //namespaced:true,
//     state, mutations, getters, actions
// }