<template>
  <div class="search p-3 overflow-auto">
    <products-row :website="'Daraz'" :products="searchedProducts&&searchedProducts.Daraz" />
    <products-row :website="'Pickaboo'" :products="searchedProducts&&searchedProducts.Pickaboo" />
    <products-row :website="'Ajkerdeal'" :products="searchedProducts&&searchedProducts.Ajkerdeal" />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
//import ProductCard from "@/components/Products/ProductCard";
import ProductsRow from "@/components/Products/ProductsRow";
export default {
  name: "search",
  components: {
    //"product-card": ProductCard,
    "products-row": ProductsRow
  },
  computed: {
    ...mapGetters("Products", ["searchedProducts"])
  }
};
</script>
