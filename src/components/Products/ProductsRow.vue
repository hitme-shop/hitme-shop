<template>
  <div v-if="products&&products.length>0" class="mb-4">
    <p class="lead">
      <b>{{website}}</b>
    </p>
    <div class="d-flex flex-wrap">
      <product-card
        class="mr-3 mb-2"
        v-for=" product in products"
        :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from "../Products/ProductCard";
export default {
  name: "product-row",
  props: ["website", "products"],
  components: {
    "product-card": ProductCard
  }
};
</script>