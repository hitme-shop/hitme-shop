<template>
  <header class="shadow-def-sm py-2 px-4">
    <div @click="toggleSidebar" class="custom-toggler float-left mt-2">
      <sidebar-toggler class="c-toggler mt-1" />
      <!-- <i class="fal fa-bars fa-2x"></i> -->
      <!-- <i class="fal fa-arrow-left"></i> -->
    </div>
    <div class="app-info float-left ml-4 pt-2">
      <h3 class="app-name">Hitme Shop</h3>
     </div> 
       
       <div class=" search form-inline md-form mr-auto mb-4">
        <input class="form-control mr-sm-2" @keydown="suggest" v-model="title" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-elegant btn-rounded btn-sm my-0"  @click="onSearch"><router-link to="/search"></router-link> Search</button>          
        </div>

        <!-- <i class="fal fa-user float-right"></i> -->

    <!-- <div class="account  float-righ fa-lg pt-3 mr-4">
      <i class="fal fa-user"></i>
    </div>
    <div class="clearfix"></div> -->
  </header>
</template>
<script>
/** Components */
import Toggler from "@/components/Togglers/SidebarToggler";
/** Vuex Store */
import { mapMutations, mapGetters,mapActions, Store } from "vuex"
import search from "@/views/Search"
export default {
  name: "custom-header",
  data(){
    return{
       title:''
    }
  },
  components: {
    "sidebar-toggler": Toggler,
    //search
    
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    ...mapMutations(["setState","setTitle"]),
    
    
    toggleSidebar() {
      this.sidebar === "collapsed"
        && this.setState({ sidebar: "expanded" })
        //: this.setState({ sidebar: "collapsed" });
        
    },
   onSearch(){
   //this.setTitle(this.title),
  
    this.$store.dispatch("fetchData",this.title) 
  
     
   },
   suggest(){
     console.log(this.title)
     this.$store.dispatch('fetchSuggestionData',this.title)
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
  .search{
    position: relative;
    left:20%;
    margin-top: 10px;
    
    }


}
</style>