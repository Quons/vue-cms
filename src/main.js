// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import {Button} from 'mint-ui'
// import vr from 'vue-resource'
import axios from 'axios'
Vue.config.productionTip = false
// 设置http依赖库
// 设置baseUrl
axios.defaults.baseURL = 'http://localhost:9082/'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
Vue.prototype.$http = axios
Vue.filter('dateformat', function (val) {
  var value = new Date(val)
  var year = value.getFullYear().toString().padStart(4, '0')
  var month = (value.getMonth() + 1).toString().padStart(2, '0')
  var day = value
    .getDate()
    .toString()
    .padStart(2, '0')
  var hour = value
    .getHours()
    .toString()
    .padStart(2, '0')
  var minutes = value
    .getMinutes()
    .toString()
    .padStart(2, '0')
  var seconds = value
    .getSeconds()
    .toString()
    .padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
})

Vue.component(Button.name, Button);
// Vue.use(MintUI);
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
