<template>
  <div class="c-card text-left">
    <div class="inner shadow-def rounded">
      <a class="destination" :href="product.url" target="_blank">
        <div class="card-top rounded overflow-hidden">
          <div class="website-info d-flex shadow-def rounded-pill px-2 py-1">
            <img class="logo rounded-circle shadow-def-sm" src="../../assets/images/daraz-logo.png" />
            <p class="small mb-0 ml-1">{{product.website}}</p>
          </div>
          <div v-if="product.discount>0" class="discount px-2 text-white">
            <span>{{product.discount}}</span>
            <span>%</span>
          </div>
          <img :src="product.src" :alt="product.title" />
        </div>
      </a>
      <div class="card-info p-3">
        <a class="destination" :href="product.url" target="_blank">
          <p class="title">{{product.title}}</p>
        </a>
        <p class="current-price float-left mb-0">
          <strong class="currency">৳</strong>
          <span class="price">{{product.sPrice}}</span>
        </p>
        <p v-if="product.sPrice != product.oPrice" class="prev-price float-left mb-0 ml-3">
          <strong class="currency">৳</strong>
          <span class="price">{{product.oPrice}}</span>
        </p>
        <div class="clearfix"></div>
        <div class="rating small mb-0 mt-1">
          <span>Rating:</span>
          <span class="value">{{product.rating}}</span>
          <span class="out-of">/5</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-card",
  props: ["product"],
  data: () => ({
    src: "https://static-01.daraz.com.bd/p/912024ea370796f7d6c66a0e91266e42.jpg"
  })
};
</script>

<style lang="scss" scoped>
$light-white: #fafafa;

.c-card {
  width: 12.7rem;
  color: #212121;
  .inner {
    background-color: white;
    .destination {
      text-decoration: none;
      color: #212121;
    }
    .card-top {
      height: 12.7rem;
      position: relative;
      .website-info {
        background-color: white;
        width: max-content;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        .logo {
          height: 1.2rem;
          width: 1.2rem;
        }
      }
      .discount {
        background-color: #ff5722;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        position: absolute;
        right: 0;
        top: 2rem;
      }
      img {
        width: 100%;
      }
    }
    .card-info {
      .title {
        height: 3rem;
        overflow: hidden;
      }
      .current-price {
        font-size: 1.2em;
        font-weight: bold;
        color: #2196f3;
      }
      .prev-price {
        text-decoration: line-through;
        color: grey;
        line-height: 1.8;
      }
      .rating {
        color: #616161;
      }
    }
  }
}
</style>