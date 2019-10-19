<template>
  <div class="showcase">
    <div class="photos-wrapper" v-for="image in images">
      <img :src="image.urls.small" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  methods: {}
};
</script>

<style scoped>
.showcase {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-columns: auto;
}
</style>