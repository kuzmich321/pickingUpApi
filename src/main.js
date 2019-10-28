import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

import Paginate from 'vuejs-paginate';

Vue.use(VueAxios, axios);

Vue.component('paginate', Paginate);

new Vue({
  el: '#app',
  render: h => h(App)
});
