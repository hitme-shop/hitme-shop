<template>
  <header class="shadow-def-sm py-2 px-4">
    <div @click="toggleSidebar" class="custom-toggler float-left mt-2">
      <sidebar-toggler class="c-toggler mt-1" />
      <!-- <i class="fal fa-bars fa-2x"></i> -->
      <!-- <i class="fal fa-arrow-left"></i> -->
    </div>
    <div class="app-info float-left ml-4 pt-2">
      <h3 class="app-name">Hitme Shop</h3>
      <h1>Search</h1>
    </div>
    <div class="account float-right fa-lg pt-3 mr-4">
      <i class="fal fa-user"></i>
    </div>
    <div class="clearfix"></div>
  </header>
</template>
<script>
/** Components */
import Toggler from "@/components/Togglers/SidebarToggler";
/** Vuex Store */
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "custom-header",
  components: {
    "sidebar-toggler": Toggler
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    ...mapMutations(["setState"]),
    toggleSidebar() {
      this.sidebar === "collapsed"
        ? this.setState({ sidebar: "expanded" })
        : this.setState({ sidebar: "collapsed" });
    }
  }
};
</script>
<style lang="scss">
header {
  height: 4rem;
  .custom-toggler {
    .c-toggler {
      cursor: pointer;
      height: 1.1rem;
    }
  }
  .app-info {
    .app-name {
      font-weight: 400;
    }
  }
}
</style>