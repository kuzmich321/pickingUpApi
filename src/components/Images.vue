<template>
  <div class="showcase">
    <app-image-item :images="images"></app-image-item>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ImageItem from "./ImageItem.vue";

export default {
  data() {
    return {
      images: []
    };
  },
  components: {
    appImageItem: ImageItem
  },
  methods: {
    transferImages() {
      this.$emit("imagesWereTransferred", this.images);
    }
  },
  mounted() {
    Vue.use(VueAxios, axios);

    Vue.axios.get(" http://localhost:5000/api/photos").then(res => {
      this.images = res.data;
    });
  }
};
</script>

<style scoped>
</style>