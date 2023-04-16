import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/PageIndex.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/PageLogin.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/PageRegister.vue'),
    },
  ],
});
