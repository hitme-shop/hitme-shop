<template>
  <div class="random-products p-3 d-flex flex-wrap text-center">
    <custom-card v-for="pro in pickaboo" :key="pro._id" :product="pro" class="mr-3 mb-3" />
  </div>
</template>

<script>
/** Components */
import Card from "../Products/ProductCard";
import { mapGetters } from "vuex";
export default {
  name: "random-products",
  components: {
    "custom-card": Card
  },
  computed: {
    ...mapGetters("Products", ["daraz", "all", "pickaboo", "ajkerdeal"])
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