<template>
  <div id="app">
    <div class="card" style="width:18rem ">
      <div v-for="(article,i) in articles" class="card" :key="i">
        <a href="#">
          <div class="Image">
            <img :src="article.images" />
          </div>
          <div class="card-content">
            <li>{{article.title}}</li>
            <li>{{article.price}}</li>
            <li>{{article.dprice}}</li>
            <li>{{article.url}}</li>
            <li>{{article.rating}}</li>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          images: "http://placehold.it/400x250/000/fff",
          title: "Lorem Ipsum",
          content: "lorem Ipsum",
          price: "1000",
          dPrice: "900",
          url: "https://www.google.com",
          rating: "4.5"
        }/* ,
        {
          images: "http://placehold.it/400x250/000/fff",
          title: "Lorem Ipsum dolor",
          content: "Lorem Ipsum dolor",
          price: "1000",
          dPrice: "900",
          url: "https://www.google.com",
          rating: "4.4"
        } */
      ]
    };
  }
};
</script>
   
<style  scoped>
.card {
  margin: 0 0 1em;
  padding: 1em 0;
  font-size: 20px;
  font-weight: 300;
  text-align: left;
  color: black;
  background: white;
  width:18rem;
  height: 100px;
}


</style>