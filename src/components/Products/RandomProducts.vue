<template>
  <div class="random-products p-3 d-flex flex-wrap">
    <products-row :website="'Daraz'" :products="random&&random.Daraz"/>
    <products-row :website="'Pickaboo'" :products="random&&random.Pickaboo"/>
    <products-row :website="'Ajkerdeal'" :products="random&&random.Ajkerdeal"/>
  </div>
</template>

<script>
/** Components */
import Row from "../Products/ProductsRow";
import { mapGetters } from "vuex";
export default {
  name: "random-products",
  components: {
    "products-row": Row
  },
  computed: {
    ...mapGetters("Products", ["random"])
  }
};
</script>
   
<style  scoped>
.card {
  margin: 0 0 1em;
  padding: 1em 0;
  font-size: 20px;
  font-weight: 300;
  text-align: left;
  color: black;
  background: white;
  width: 18rem;
  height: 100px;
}
</style>