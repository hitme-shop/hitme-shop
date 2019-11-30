<template>
  <div class="image-slider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>
<script>
export default {
  name: "image-slider",
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },
  props: ["sliders"],

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      let i = this.sliders.length
        ? this.sliders[Math.abs(this.currentIndex) % this.sliders.length]
        : 0;
      return i;
    }
  }
};
</script>

<style  scoped>
.image-slider {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(34, 33, 33, 0.486);
}
</style>