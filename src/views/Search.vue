<template>
  <div class="search">
    <h1>SEARCH</h1>
    <product-card v-for=" product in allProducts" :key='product._id' :product="product"/>
  <div>{{allProducts}}</div>
     <!-- <div v-for="products in allProducts" :key="products.title" class="container">       
       {{products.title}} -->
  
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
.todo{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    
}
.container{
    
   background: coral; 
   color: white;
    padding: 3rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    
    
}
i{
    color: #000;
}
</style>
