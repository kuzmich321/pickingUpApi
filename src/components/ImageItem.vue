<template>
  <div class="single-image">
    <img :src="image.urls.small" @click="getClickedImg" alt />
  </div>
</template>

<script>
import { EventBus } from '../event-bus';
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

      EventBus.$emit('isActivePropRecieved', this.isActive);
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
  width: 100%;
  height: 100%;
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
