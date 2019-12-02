<template>
  <div class="home">
    <sliders-container />
    <RandomProducts/>
   
  </div>
</template>

<script>
/** Components */
import SlidersContainer from "@/components/Sliders/index";
import RandomProducts from "@/components/Products/RandomProducts"

export default {
  name: "home",
  components: {
    "sliders-container": SlidersContainer,
    RandomProducts
 
  }
};
</script>

<style lang='scss'>
</style>
