<template>
  <ul>
    <li v-for="(item, index) in limit" :key="index" :class="[color]">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    limit: Number,
    color: String
  }
};
</script>
<style >
.pink {
  color: pink;
}
.red {
  color: red;
}
</style>