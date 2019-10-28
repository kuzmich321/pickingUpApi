<template>
  <section class="base-pagination">
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      numberOfPages: 10
    };
  }
};
</script>

<style scoped>
.pagination-section {
  height: 100px;
}

.pagination {
  width: 70%;
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
}

button {
  font-size: 1.5rem;
  border: none;
  outline: none;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: lightblue;
}
</style>