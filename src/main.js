// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {Header} from 'mint-ui'
Vue.config.productionTip = false
// 设置http依赖库
// 设置baseUrl
axios.defaults.baseURL = 'http://localhost:9082/'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
Vue.prototype.$http = axios

Vue.component(Header.name, Header);
new Vue({ 
  el: '#app',
  router, 
  components: {
    App
  },
  template: '<App/>',
  watch: {
    '$route.path': function (newVal, oldVal) {
      console.log(newVal);
    }
  },
})
