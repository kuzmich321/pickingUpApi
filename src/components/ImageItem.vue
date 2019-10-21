<template>
  <div class="single-image">
    <img :src="image.urls.small" alt />
  </div>
</template>

<script>
export default {
  props: { image: Object },
  methods: {}
};
</script>

<style scoped>
.single-image img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}
</style>