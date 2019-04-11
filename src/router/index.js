import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
Vue.use(Router);

export default new Router({
  linkActiveClass: 'myactive',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
