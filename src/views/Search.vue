<template>
  <div class="search p-3">
    <div class="d-flex flex-wrap ">
       <product-card class="mr-2 mb-2" v-for=" product in allProducts.data" :key='product._id' :product="product"/>
      </div>  
   
  
  </div>
</template>

<script>

import { mapMutations, mapGetters,mapState } from "vuex";
import ProductCard from "@/components/Products/ProductCard"

export default {
  name: "search",
  components:{
    "product-card": ProductCard

  },
  computed:{
    //value: state=>state.name,
    ...mapGetters(["allProducts"])
  },


};
</script>


<style scoped>


</style>
