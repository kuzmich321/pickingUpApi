<template>
  <div>
    <div class="showcase">
      <div class="photos-wrapper" v-for="divsCount in images">
        <app-image-item v-for="image in divsCount" :image="image"></app-image-item>
      </div>
    </div>
    <button>Second</button>
    <a>URL : {{}}</a>
  </div>
</template>

<script>
import axios from "axios";
import ImageItem from "./ImageItem.vue";

export default {
  data() {
    return {
      PHOTOS_URL: process.env.UNSPLASH_URL,
      images: [],
      divsCount: 3,
      currentPage: 1,
      pageCount: 10
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
    },
    async pageChangeHandle(value) {
      switch (value) {
        case "next":
          this.currentPage += 1;
          break;
        case "previous":
          this.currentPage -= 1;
          break;
        default:
          this.currentPage = value;
      }
      const { getApi } = await this.axios.get(
        "http://localhost:3000/api/v1/photos",
        {
          params: { client_id: process.env.VUE_APP_API_KEY }
        }
      );
    }
  },
  async mounted() {
    try {
      const { getApi } = await this.axios
        .get("http://localhost:3000/api/v1/photos", {
          params: { client_id: process.env.VUE_APP_API_KEY }
        })
        .then(res => (this.images = this.chunk(res.data, this.divsCount)));
    } catch (err) {
      throw err;
    }
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