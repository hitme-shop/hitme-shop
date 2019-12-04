<template>
  <div class="search-form">
    <div class="c-form shadow-def-sm rounded-pill px-2">
      <input
        v-model="keyword"
        @keydown="keyDown"
        class="rounded-pill"
        type="text"
        placeholder="What are you looking for?"
      />
      <button @click="onSearch" class="bg-gradient shadow-def-sm rounded-pill px-3">Search</button>
    </div>
    <div class="suggestions shadow-def-lg rounded mt-2">
      <p
        v-for="(item, index) in searchSuggestions"
        :class="{active:focused==index}"
        :key="index"
        @click="onSelected(item)"
        class="px-4 py-2 mb-0"
      >{{item}}</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "search-form",
  data: () => ({
    keyword: "",
    focused: -1
  }),
  computed: {
    ...mapGetters("Products", ["searchSuggestions"])
  },
  methods: {
    ...mapActions("Products", [
      "fetchSearchedProducts",
      "fetchSearchSuggestions"
    ]),
    ...mapMutations("Products", ["setState"]),
    onSearch() {
      this.fetchSearchedProducts(this.keyword);
    },
    onSelected(keyword) {
      this.keyword = keyword;
      this.fetchSearchedProducts(keyword);
    },
    keyDown(e) {
      if (e.keyCode == 13) {
        this.keyword =
          this.focused !== -1
            ? this.searchSuggestions[this.focused]
            : this.keyword;
        this.fetchSearchedProducts(this.keyword);
      } else if (e.keyCode == 38) {
        this.focused >= 0
          ? this.focused--
          : (this.focused = this.searchSuggestions.length);
      } else if (e.keyCode == 40) {
        this.focused <= this.searchSuggestions.length
          ? this.focused++
          : (this.focused = 0);
      } else {
        this.fetchSearchSuggestions(this.keyword + e.key);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search-form {
  width: 24rem;
  position: relative;
  .c-form {
    border: 1px solid rgb(221, 221, 221);
    margin-top: 0.3rem;
    width: 24rem;
    position: relative;
    input {
      padding-left: 1rem;
      border: none;
      width: 100%;
      height: 2.2rem;
    }
    button {
      position: absolute;
      height: 1.8rem;
      border: none;
      color: white;
      top: 0.2rem;
      right: 0.2rem;
    }
  }
  .suggestions {
    width: 100%;
    z-index: 100;
    position: absolute;
    overflow: hidden;
    max-height: 64vh;
    background-color: #ffffff;
    color: #313131;
    p {
      cursor: pointer;
      max-height: 3.18rem;
      line-height: 1.2;
      overflow: hidden;
    }
    p:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    p.active {
      color: white;
    }
  }
}
</style>