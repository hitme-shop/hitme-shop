//import api from "../../helpers/axios"
import axios from "axios"

const actions ={
    async fetchData({commit},searchItem){
        const response = await axios.get(`https://hitme-shop-api.herokuapp.com/v1/search/${searchItem}`)
        commit('findProducts',response.data)
        // console.log(response.data)
        console.log(`${searchItem}`)
        
    }
}

const state = {
    product:[],
    title:""

    
}




const mutations = {
    findProducts: (state,product)=>{state.product=product},
    }
    
    
    


const getters={
    allProducts: state=>state.product,
    
}

export default {
    //namespaced:true,
    state,mutations,getters,actions
}