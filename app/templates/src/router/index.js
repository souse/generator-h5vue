import Vue from 'vue';
import Router from 'vue-router';

// import beforeEachHooks from './beforeEachHooks';
import common from './routers/common';
import basic from './basic';

Vue.use(Router);

const routes = [...basic, ...common];

const routerInstance = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Object.values(beforeEachHooks).forEach(hook => {
//   routerInstance.beforeEach(hook);
// });

export default routerInstance;
