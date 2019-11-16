<template>
  <section class="container bg-pan-left">
    <app-images></app-images>
  </section>
</template>

<script>
import Images from './Images.vue';

export default {
  components: {
    appImages: Images
  },
  methods: {}
};
</script>

<style scoped>
ul {
  list-style: none;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

li {
  background-color: red;
}

@media (max-width: 1550px) {
  .container {
    width: 100%;
  }
}
</style>
