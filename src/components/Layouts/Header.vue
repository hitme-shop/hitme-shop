<template>
  <header class="shadow-def-sm py-2 px-4">
    <div @click="toggleSidebar" class="custom-toggler d-inline-block">
      <sidebar-toggler class="c-toggler" />
    </div>
    <div class="app-info d-inline-block ml-4 pt-2">
      <h3 class="app-name">Hitme Shop</h3>
    </div>

    <search-form class="d-inline-block" />

    <div class="account fa-lg pt-3 mr-4">
      <i class="fal fa-user"></i>
    </div>
  </header>
</template>
<script>
/** Components */

import Toggler from "@/components/Togglers/SidebarToggler";
import SearchForm from "@/components/Forms/SearchForm";
/** Vuex Store */
import { mapMutations, mapGetters, mapActions, Store } from "vuex";
export default {
  name: "custom-header",
  components: {
    "sidebar-toggler": Toggler,
    "search-form": SearchForm
  },
  data() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    ...mapMutations(["setState", "setTitle"]),

    toggleSidebar() {
      this.sidebar === "collapsed"
        ? this.setState({ sidebar: "expanded" })
        : this.setState({ sidebar: "collapsed" });
    },
    onSearch() {
      this.$store.dispatch("fetchData", this.title);
    },
    suggest() {
      console.log(this.title);
      this.$store.dispatch("fetchSuggestionData", this.title);
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
  .account {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
}
</style>