import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';  // Home Page View
import Register from '@/layouts/Register.vue';  // Register page layout
import Login from '@/layouts/Login.vue/'; //Login page layout
import SidebarLayout from '../layouts/SidebarLayout.vue';

const routes = [
  // Root page of the app
  {
    path: '/',
    name: 'Home',
    component: Home,  
  },

  // Register page layout
  {
    path: '/register',
    name: 'Register',
    component: Register,  
  },

  //Login page layout
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
