<template>
  <div class="sidebar txt-pri" :class="{collapsed:sidebar=='collapsed'}">
    <div class="inner py-4">
      <nav class="px-2">
        <router-link to="/" tag="li" class="mb-2 py-1 px-3 rounded">
          <i class="fal fa-home pr-2"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/compare" tag="li" class="mb-2 py-1 px-3 rounded">
          <i class="fal fa-columns pr-2"></i>
          <span>Compare</span>
        </router-link>
      </nav>
      <hr>
      <category-list :allCategories="categories" />
    </div>
  </div>
</template>
<script>
/** Components */
import ExpandableList from "../CustomLists/ExpandableList";
/** Vuex Store */
import { mapGetters } from "vuex";
/** Exporting component */
export default {
  name: "sidebar",
  components: {
    "category-list": ExpandableList
  },
  computed: {
    ...mapGetters(["sidebar"]),
    ...mapGetters("Categories", ["categories"])
  }
};
</script>
<style lang="scss">
.sidebar {
  width: 13rem;
  height: calc(100vh - 4rem);
  transition: width 0.3s linear;
  overflow: auto;
  .inner {
    width: 13rem;
    position: relative;
    nav {
      li {
        cursor: pointer;
        transition: 0.3s ease-in-out;
      }
      li.router-link-exact-active {
        color: white;
      }
      li:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
  }
}
.collapsed {
  width: 0;
  padding: 0;
  overflow: hidden;
}
</style>