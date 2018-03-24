import Vue from 'vue';
import Router from 'vue-router';
import Test from '@/page/test';


Vue.use(Router);

const Testcompoent = r => require.ensure([], () => r(Test), 'test');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Testcompoent,
    },
  ],
});
