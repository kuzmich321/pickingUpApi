<template>
  <div id="app">
    <app-header></app-header>
    <app-showcase></app-showcase>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Showcase from "./components/Showcase.vue";

export default {
  components: {
    appHeader: Header,
    appShowcase: Showcase
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}

#app {
  background-color: #333;
}

.container {
  width: 80%;
  margin: auto;
}
</style>
