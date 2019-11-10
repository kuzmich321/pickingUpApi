<template>
  <div class="single-image">
    <img :src="image.urls.small" @click="getClickedImg" :class="{chosen: isActive}" alt />
  </div>
</template>

<script>
export default {
  props: { image: Object },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    getClickedImg() {
      this.isActive = !this.isActive;
      if (isActive) {
        document.getElementsByClassName("img").attr("src", "image.urls.full");
      }
    }
  }
};
</script>

<style scoped>
.single-image img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  cursor: pointer;
}

.single-image img:hover {
  -webkit-animation: blink-2 0.9s both;
  animation: blink-2 0.9s both;
}

.chosen {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
}

@-webkit-keyframes blink-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>