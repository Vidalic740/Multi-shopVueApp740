import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';  // Home Page View.
import Register from '@/layouts/Register.vue';  // Register page layout.
import Login from '@/layouts/Login.vue/'; //Login page layout.
import SidebarLayout from '../layouts/SidebarLayout.vue'; //Shared Sidebar layout.
import AdminView from '../views/AdminView.vue'; //Admin Dashboard layout.
import HomeView from '../views/HomeView.vue'; //HomeView/main-page layout.
import Products from '../views/Products.vue'; //Products layout.
import ShopAdmin from '../views/ShopAdmin.vue'; //ShopAdmin layout.


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

  //Sidebar Layout
  {
    path: '/sidebar',
    name: 'SidebarLayout',
    component: SidebarLayout,
  },

  //HomeView layout
  {
    path: '/homeview',
    name: 'HomeView',
    component: HomeView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
