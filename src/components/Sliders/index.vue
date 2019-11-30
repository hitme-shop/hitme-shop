<template>
  <div class="sliders-container p-2">
    <image-slider :sliders="daraz" />
    <div>
      <image-slider :sliders="pickaboo" />
      <image-slider :sliders="ajkerdeal" />
    </div>
  </div>
</template>

<script>
/** Components */
import ImageSlider from "@/components/Sliders/ImageSlider";

import { mapGetters } from "vuex";
export default {
  name: "sliders-container",
  components: { "image-slider": ImageSlider },
  computed: {
    ...mapGetters("Sliders", ["daraz", "pickaboo", "ajkerdeal"])
  }
};
</script>

<style lang="scss">
.sliders-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>