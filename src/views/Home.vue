<template>
  <div class="home">
    <sliders-container />
  </div>
</template>

<script>
/** Components */
import SlidersContainer from "@/components/Sliders/index";
export default {
  name: "home",
  components: {
    "sliders-container": SlidersContainer
  }
};
</script>

<style lang='scss'>
</style>
