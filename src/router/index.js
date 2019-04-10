import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import VueDemo from '@/components/Demo';
import BandDemo from '@/components/Band';
import TransitionDemo from '@/components/TransitionDemo';
import TransitionDemo2 from '@/components/TransitionDemo2';
import TransitionDemo3 from '@/components/TransitionDemo3';
import TransitionDemo4 from '@/components/TransitionDemo4';
import TransitionDemo5 from '@/components/TransitionDemo5';
import TransitionDemo6 from '@/components/TransitionDemo6';
import TransitionDemo7 from '@/components/TransitionDemo7';
import TransitionDemo8 from '@/components/TransitionDemo8';
import TransitionDemo9 from '@/components/TransitionDemo9';
import TransitionDemo11 from '@/components/TransitionDemo11';
import TransitionDemo10 from '@/components/TransitionDemo10';
import TransitionDemo12 from '@/components/TransitionDemo12';
import TransitionDemo13 from '@/components/TransitionDemo13';
import TransitionDemo14 from '@/components/TransitionDemo14';
import TransitionDemo15 from '@/components/TransitionDemo15';
import TransitionDemo16 from '@/components/TransitionDemo16';
import TransitionDemo17 from '@/components/TransitionDemo17';
Vue.use(Router);

export default new Router({
  linkActiveClass: 'myactive',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-demo',
      name: 'vue-demo',
      component: VueDemo
    },
    {
      path: '/band-demo',
      name: 'brand-demo',
      component: BandDemo
    },
    {
      path: '/transition',
      name: 'transition-demo',
      component: TransitionDemo
    },
    {
      path: '/transition2',
      name: 'transition-demo2',
      component: TransitionDemo2
    },
    {
      path: '/transition3',
      name: 'transition-demo3',
      component: TransitionDemo3
    },
    {
      path: '/transition4',
      name: 'transition-demo4',
      component: TransitionDemo4
    },
    {
      path: '/transition5',
      name: 'transition-demo5',
      component: TransitionDemo5
    },
    {
      path: '/transition6',
      name: 'transition-demo6',
      component: TransitionDemo6
    },
    {
      path: '/transition7',
      name: 'transition-demo7',
      component: TransitionDemo7
    },
    {
      path: '/transition8',
      name: 'transition-demo8',
      component: TransitionDemo8
    },
    {
      path: '/transition9',
      name: 'transition-demo9',
      component: TransitionDemo9
    },
    {
      path: '/transition10',
      name: 'transition-demo10',
      component: TransitionDemo10
    },
    {
      path: '/transition11',
      name: 'transition-demo11',
      component: TransitionDemo11,
      children: [{
        path: 'test',
        component: TransitionDemo12
      }]
    },
    {
      path: '/transition13',
      name: 'transition-demo13',
      component: TransitionDemo13
    },
    {
      path: '/transition14',
      name: 'transition-demo14',
      component: TransitionDemo14
    },
    {
      path: '/transition15',
      name: 'transition-demo15',
      component: TransitionDemo15
    },
    {
      path: '/transition16',
      name: 'transition-demo16',
      component: TransitionDemo16
    }
    ,
    {
      path: '/transition17',
      name: 'transition-demo17',
      component: TransitionDemo17
    }
  ]
});
