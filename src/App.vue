<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
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
  height: 100vh;
  background-color: #141b20;
}

.container {
  width: 80%;
}
</style>
