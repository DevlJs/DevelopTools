import Vue from 'vue'
import App from './App'
import store from './store'
/* eslint-disable no-new */
let vue = new Vue({
  el: 'body',
  components: { App }
});

console.log(store);