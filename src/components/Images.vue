<template>
  <div>
    <div class="showcase focus-in">
      <div class="photos-wrapper" v-for="divsCount in images">
        <app-image-item v-for="image in divsCount" :image="image"></app-image-item>
      </div>
    </div>
    <paginate
      :pageCount="totalPages"
      :clickHandler="getImages"
      :containerClass="'pagination'"
      :pageClass="'pagination--item'"
    ></paginate>
  </div>
</template>

<script>
import axios from "axios";
import ImageItem from "./ImageItem.vue";
import Unsplash, { toJson } from "unsplash-js";
import { EventBus } from "../event-bus";

export default {
  data() {
    return {
      unsplashUrl: process.env.VUE_APP_UNSPLASH_URL,
      images: [],
      divsCount: 3,
      totalPages: 10,
      keyword: ""
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
    getImages(page, per_page = 30) {
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
    },
    searchImages(query, page, per_page = 30) {
      if (this.keyword !== "") {
        try {
          axios
            .get(this.unsplashUrl, {
              params: {
                client_id: process.env.VUE_APP_API_KEY,
                query: this.keyword,
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
    getInputValue(data) {
      this.keyword = data;
    }
  },
  mounted() {
    this.getImages(1, 30);
    EventBus.$on("inputValueRecieved", data => this.getInputValue(data));
  },
  watch: {
    keyword: function() {
      this.searchImages(this.keyword, 1, 10);
    }
  }
};
</script>

<style>
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

.pagination {
  width: 70%;
  padding: 30px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  background-color: #f4f4f4;
  transition: all 0.5s;
}

ul {
  list-style: none;
}

.pagination--item {
  width: 20px;
  height: 20px;
  text-align: center;
}

.active {
  border: 2px solid lightcoral;
  border-radius: 50%;
}

.focus-in {
  -webkit-animation: focus-in 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: focus-in 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
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