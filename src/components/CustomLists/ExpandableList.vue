<template>
  <div class="expandable-list bgSecondary pb-3">
    <p class="small txt-sec mb-2 py-1 px-3">
      <i class="fal fa-list pr-2"></i>
      <span>Categories</span>
    </p>
    <ul class="mc-group m-0 p-0">
      <div class="mc-item item" v-for="(a, i) in allCategories" :key="i">
        <p @click="setMcActive(a.mCat)" :class="{active:mcActive.includes(a.mCat)}" class="c-title">
          <i class="arrow fal fa-angle-right fa-lg"></i>
          <span class="ml-2">{{a.mCat}}</span>
        </p>
        <div class="clearfix"></div>
        <div class="sc-group" :class="{'expand':mcActive.includes(a.mCat)}">
          <li class="sc-item item" v-for="(b, i) in a.sCats" :key="i">
            <p
              @click="setScActive(b.sCat)"
              :class="{active:scActive.includes(b.sCat)}"
              class="c-title"
            >
              <i class="arrow fal fa-angle-right"></i>
              <span class="ml-2">{{b.sCat}}</span>
            </p>

            <ul class="c-group" :class="{'expand':scActive.includes(b.sCat)}">
              <div class="c-item item" v-for="(c, i) in b.cats" :key="i">
                <p class="c-title" @click="selectCat({cat:c,sCat:b.sCat,mCat:a.mCat})">{{c}}</p>
              </div>
            </ul>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapMutations, Store } from "vuex";
export default {
  name: "expandable-list",
  props: ["allCategories"],
  data() {
    return {
      mcActive: [],
      scActive: []
    };
  },
  methods: {
    ...mapMutations(["selectCatProduct"]),
    setMcActive(mc) {
      this.mcActive.indexOf(mc) === -1
        ? this.mcActive.push(mc)
        : this.mcActive.splice(this.mcActive.indexOf(mc), 1); //,this.scActive=[])
    },
    setScActive(sc) {
      this.scActive.indexOf(sc) === -1
        ? this.scActive.push(sc)
        : this.scActive.splice(this.scActive.indexOf(sc), 1);
    },
    selectCat(categories) {
      this.$store.dispatch("Products/fetchCategoryProducts", categories);
    }
  }
};
</script>

<style lang="scss" scoped>
.expandable-list {
  .mc-group,
  .sc-group,
  .c-group {
    .item {
      .c-title {
        font-size: 0.9em;
        padding: 0.2rem 0;
        padding-right: 1rem;
        cursor: pointer;
        margin-bottom: 0;
        color: rgb(43, 41, 41);
        .arrow {
          transition: transform 0.3s ease-in-out;
        }
      }
      .c-title:hover,
      .active {
        color: #389bff;
      }
      .active {
        background-color: rgba(0, 0, 0, 0.1);
        .arrow {
          transform: rotate(90deg);
        }
      }
    }
  }
  .mc-group {
    .mc-item {
      .c-title {
        padding-left: 1rem;
      }
    }
  }
  .sc-group,
  .c-group {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s;
  }
  .sc-group {
    .item {
      .c-title {
        padding-left: 2rem;
      }
    }
  }
  .c-group {
    .item {
      .c-title {
        padding-left: 3rem;
      }
    }
  }
  .expand {
    height: auto;
    transition: max-height 0.3s;
    max-height: 32rem;
  }
}
</style>