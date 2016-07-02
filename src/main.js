import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
});
