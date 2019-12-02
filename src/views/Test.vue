<template>
  <div class="test">
    <h4>Props example</h4>

    <div class="container">
      <c-ul :limit="5" :color="'pink'" />
      <c-ul :limit="10" :color="'red'" />
      <!-- <ul>
        <li v-for="(item, index) in 10" :key="index">{{item}}</li>
      </ul>-->
    </div>
  </div>
</template>

<script>
import UL from "../components/test/UL";

export default {
  name: "test",
  components: { "c-ul": UL }
};
</script>