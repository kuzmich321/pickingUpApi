<template>
  <div>
    <div class="showcase">
      <div class="photos-wrapper" v-for="divsCount in images">
        <app-image-item v-for="image in divsCount" :image="image"></app-image-item>
      </div>
    </div>
    <button @click="getImages(2, 30)">Second</button>
    <app-pagination @currentPageRecieved="getImages(page, 30)"></app-pagination>
  </div>
</template>

<script>
import axios from "axios";
import ImageItem from "./ImageItem.vue";
import Pagination from "./Pagination.vue";
import Unsplash, { toJson } from "unsplash-js";

export default {
  data() {
    return {
      unsplashUrl: process.env.VUE_APP_UNSPLASH_URL,
      images: [],
      divsCount: 3
    };
  },
  components: {
    appImageItem: ImageItem,
    appPagination: Pagination
  },
  methods: {
    chunk(arr, size) {
      const optimalSize = Math.floor(arr.length / size);
      return Array.from(
        { length: Math.ceil(arr.length / optimalSize) },
        (v, i) => arr.slice(i * optimalSize, i * optimalSize + optimalSize)
      );
    },
    getImages(page, per_page) {
      try {
        axios
          .get(this.unsplashUrl, {
            params: {
              client_id: process.env.VUE_APP_API_KEY,
              page,
              per_page
            }
          })
          .then(res => (this.images = this.chunk(res.data, this.divsCount)));
      } catch (err) {
        throw err;
      }
    }
  },
  mounted() {
    this.getImages(this.page, 30);
  }
};
</script>

<style scoped>
.showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 4px;
  margin-bottom: 50px;
}

.photos-wrapper {
  max-width: 33%;
  padding: 0 5px;
}

@media screen and (max-width: 880px) {
  .photos-wrapper {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .photos-wrapper {
    flex: 100%;
    max-width: 100%;
  }
}
</style>