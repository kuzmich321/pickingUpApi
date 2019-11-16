<template>
  <header>
    <div class="header-wrapper">
      <div class="search scale-in-hor-left">
        <input
          type="text"
          class="search-form"
          :placeholder="defaultSearchMsg"
          v-model="keyword"
        />
        <button type="submit" class="search-btn btn" @click="getInputValue">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div class="user-section">
        <button class="user-btn btn">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        </button>
        <button class="user-btn btn">
          <i class="fa fa-comments" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { EventBus } from '../event-bus';

export default {
  data() {
    return {
      defaultSearchMsg: 'What are you looking for?!',
      keyword: ''
    };
  },
  methods: {
    getInputValue() {
      EventBus.$emit('inputValueRecieved', this.keyword);

      this.keyword = '';
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #612a30;
  margin: auto;
  margin-bottom: 30px;
  background-color: #151515;
}

.header-wrapper {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  width: 50%;
  height: auto;
  position: relative;
  display: flex;
}

.search-form {
  width: 100%;
  border: 3px solid #99cef4;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.search-form:focus {
  color: #142121;
}

.btn {
  width: 40px;
  height: 36px;
  border: 1px solid #99cef4;
  background: #99cef4;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
}

.search-btn {
  border-radius: 0 5px 5px 0;
}

.user-btn {
  border-radius: 50%;
}

.user-btn:hover {
  background: none;
  border: none;
  transition: all 0.3s;
}

.scale-in-hor-left {
  animation: scale-in-hor-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scale-in-hor-left {
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
</style>
