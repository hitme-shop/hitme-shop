<template>
  <div class="position-relative">
    <div class="images">
      <a v-for="(image,index) in sliders" :key="image._id" :href="image.url" target="_blank">
        <img :class="{active:current==index}" :src="image.src" />
      </a>
    </div>
    <div class="buttons">
      <div @click="prev" class="circle left ml-2 shadow-def-sm">
        <i class="to-center fal fa-angle-left"></i>
      </div>
      <div @click="next" class="circle right mr-2 shadow-def-sm">
        <i class="to-center fal fa-angle-right"></i>
      </div>
    </div>
    <div class="dots">
      <i
        v-for="(item, index) in sliders"
        :key="index"
        :class="{active:current==index}"
        class="fal fa-genderless fa-lg"
      >
        <span v-if="current==index" class="to-center"></span>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-slider",
  props: ["sliders"],
  data: () => ({
    current: 0,
    isPaused: false,
    interval: 5000
  }),
  created() {
    setInterval(!this.isPaused && this.next, this.interval);
  },
  methods: {
    async next() {
      this.isPaused = true;
      this.current < this.sliders.length - 1
        ? this.current++
        : (this.current = 0);
      await setTimeout(() => {
        this.isPaused = false;
      }, this.interval);
    },
    async prev() {
      this.current > 0
        ? this.current--
        : (this.current = this.sliders.length - 1);
      await setTimeout(() => {
        this.isPaused = false;
      }, this.interval);
    }
  }
};
</script>

<style lang='scss' scoped>
.sliders-container {
  position: relative;
  .images {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
      display: none;
    }
    .active {
      display: block;
    }
  }
  .buttons {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    overflow: hidden;
    transform: translate(0, -50%);
    .circle {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
      position: relative;
      transition: left, right;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      i {
        color: white;
      }
    }
    .left {
      float: left;
      left: -3rem;
    }
    .right {
      float: right;
      right: -3rem;
    }
  }
  .dots {
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    width: 100%;
    text-align: center;
    i {
      position: relative;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      color: rgba(255, 255, 255, 0.5);
      span {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
    }
    .active {
      font-size: 1.8em;
      color: white;
      span {
        background-color: white;
      }
    }
  }
}
.sliders-container:hover {
  .buttons {
    .left {
      left: 0.5rem;
    }
    .right {
      right: 0.5rem;
    }
  }
}
</style>