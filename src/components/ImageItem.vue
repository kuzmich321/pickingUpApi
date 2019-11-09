<template>
  <div class="single-image">
    <img :src="image.urls.small" alt />
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