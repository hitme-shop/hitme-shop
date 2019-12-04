<template>
  <div class="website-info d-flex shadow-def rounded-pill px-2 py-1">
    <img
      v-if="website=='Daraz'"
      class="logo rounded-circle shadow-def-sm"
      src="../../assets/images/daraz-logo.png"
    />
    <img
      v-if="website=='Pickaboo'"
      class="logo rounded-circle shadow-def-sm"
      src="../../assets/images/pickaboo-logo.png"
    />
    <img
      v-if="website=='Ajkerdeal'"
      class="logo rounded-circle shadow-def-sm"
      src="../../assets/images/ajkerdeal-logo.png"
    />
    <p class="small mb-0 ml-1 mr-2">{{website}}</p>
  </div>
</template>
<script>
export default {
  name: "website-info",
  props: ["website"]
};
</script>
<style lang="scss" scoped>
.website-info {
  background-color: white;
  width: max-content;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  .logo {
    height: 1.2rem;
    width: 1.2rem;
  }
}
</style>