<template>
  <div class="overflow-auto d-flex flex-wrap p-3">
    <products-row :website="'Daraz'" :products="categoryProducts&&categoryProducts.Daraz" />
    <products-row :website="'Pickaboo'" :products="categoryProducts&&categoryProducts.Pickaboo" />
    <products-row :website="'Ajkerdeal'" :products="categoryProducts&&categoryProducts.Ajkerdeal" />
  </div>
</template>

<script>
//import ProductCard from "@/components/Products/ProductCard";
import ProductsRow from "@/components/Products/ProductsRow";
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  name: "category",
  components: {
    //"catproduct-card": ProductCard,
    "products-row": ProductsRow
  },
  computed: {
    ...mapGetters("Products", ["categoryProducts"])
  }
};
</script>

<style lang='scss'>
</style>