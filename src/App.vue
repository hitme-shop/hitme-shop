<template>
  <div id="app" class="txt-pri">
    <custom-header />
    <div class="custom-grid">
      <custom-sidebar />
      <router-view />
    </div>
  </div>
</template>
<script>
/** Components */
import Sidebar from "@/components/Layouts/Sidebar";
import Header from "@/components/Layouts/Header";

export default {
  name: "app",
  components: {
    "custom-sidebar": Sidebar,
    "custom-header": Header
  },
  created() {
    this.$store.dispatch("init");
  }
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";

.custom-grid {
  display: grid;
  grid-template-columns: max-content auto;
}
</style>
