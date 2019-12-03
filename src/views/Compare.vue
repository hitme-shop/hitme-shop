<template>
  <div>

 
  
<div class="jumbotron d-flex align-items-center">
  <div class="container">
    <input class="form-control mr-sm-2" type="text" v-model="title"  placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" @click="btnSubmit" >Search</button>
    
  </div>
</div>
 <div class="d-flex flex-wrap p-3">
       <cmpProduct-card class="mr-2 mb-2" v-for=" product in setCmpProducts.data" :key='product._id' :product="product"/>
      </div> 
      
      
  </div>
  
    <!-- <div class=" search form-inline my-2 my-lg-0 sticky-top ">
      <span class="align-top">
        
      </span>
      
    </div>
  -->


  
</template>

<script>
import cmpProductCard from "@/components/Products/ProductCard"
import {mapActions,mapGetters,mapMutations,store} from "vuex"
export default {
  name: "compare",
  data(){
    return{
      title:""
    }
  },
  components:{
    "cmpProduct-card": cmpProductCard
    

  },
  computed:{
    ...mapGetters("Products",["setCmpProducts"])
    

  },
  methods:{
    ...mapMutations(["setCmpProductsTitle"]),
    btnSubmit(){
      this.$store.dispatch("Products/cmpProducts",this.title)

    }
  }
};
</script>

<style lang='scss'>
   
</style>
