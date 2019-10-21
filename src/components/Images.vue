<template>
  <div class="showcase">
    <div class="photos-wrapper" v-for="divsCount in images">
      <app-image-item v-for="image in divsCount" :image="image"></app-image-item>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ImageItem from "./ImageItem.vue";

export default {
  data() {
    return {
      images: [],
      divsCount: 3
    };
  },
  components: {
    appImageItem: ImageItem
  },
  methods: {
    chunk(arr, size) {
      const optimalSize = Math.floor(arr.length / size);
      return Array.from(
        { length: Math.ceil(arr.length / optimalSize) },
        (v, i) => arr.slice(i * optimalSize, i * optimalSize + optimalSize)
      );
    }
  },
  mounted() {
    this.axios.get(" http://localhost:5000/api/photos").then(res => {
      this.images = this.chunk(res.data, this.divsCount);
    });
  }
};
</script>

<style scoped>
.showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 4px;
}

.photos-wrapper {
  max-width: 33%;
  padding: 0 5px;
}
</style>