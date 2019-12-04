<template>
  <div id="app" class="txt-pri">
    <custom-header />
    <div class="custom-grid">
      <custom-sidebar />
      <router-view />
<<<<<<< HEAD
=======
      <!-- <router-link to="/search">Search</router-link> -->
>>>>>>> e42084ff785f7e63647474b83b56b8db2f3866dd
    </div>
  </div>
</template>
<script>
/** Components */
import Sidebar from "@/components/Layouts/Sidebar";
import Header from "@/components/Layouts/Header";
import { mapActions } from 'vuex';

export default {
  name: "app",
  components: {
    "custom-sidebar": Sidebar,
    "custom-header": Header,
    //"custom-search": Search
  },computed:{

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
