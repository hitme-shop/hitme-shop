<template>
  <div class="sliders-container p-2">
    <custom-image-slider :sliders="daraz" />
  </div>
</template>

<script>
/** Components */
//import ImageSlider from "@/components/Sliders/ImageSlider";
import CustomImageSlider from "@/components/Sliders/CustomSlider";

import { mapGetters } from "vuex";
export default {
  name: "sliders-container",
  components: {
    //"image-slider": ImageSlider,
    "custom-image-slider": CustomImageSlider
  },
  computed: {
    ...mapGetters("Sliders", ["daraz", "darazSliders", "pickaboo", "ajkerdeal"])
  }
};
</script>

<style lang="scss">
</style>