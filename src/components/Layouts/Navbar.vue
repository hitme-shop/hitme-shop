<template>
 <nav class="navbar navbar-light bg-light justify-content-between" >
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline " id="searchbar">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#searchbar{
 margin-right: 500px;
}
</style>
