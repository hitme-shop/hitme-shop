<template>
   <div class="d-flex flex-wrap p-3">
       <catproduct-card class="mr-2 mb-2" v-for=" product in CatProducts.data" :key='product._id' :product="product"/>
      </div>  

</template>

<script>
 import ProductCard from "@/components/Products/ProductCard"
import { mapMutations, mapGetters,mapState } from "vuex";
export default {
  name: "category",
  components:{
     "catproduct-card": ProductCard

  },
  computed:{
    ...mapGetters("Products",["CatProducts"])
    
  }

};
</script>

<style lang='scss'>
</style>