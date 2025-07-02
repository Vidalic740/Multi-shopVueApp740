<script setup>
import { ref } from 'vue'

// Import views
import AdminView from '../views/AdminView.vue'
import ShopAdmin from '../views/ShopAdmin.vue'
import ShopProfile from '../views/ShopProfile.vue'
import HomeView from '../views/HomeView.vue'
import ShopsView from '../views/ShopsView.vue'
import WholesalesView from '../views/WholesalesView.vue'
import OrdersView from '../views/OrdersView.vue'
import SalesView from '../views/SalesView.vue'
import PromotionsView from '../views/PromotionsView.vue'
import CartView from '../views/CartView.vue'
import ProfileView from '../views/ProfileView.vue'
import ManageUsersView from '../views/ManageUsersView.vue'
import SettingsView from '../views/SettingsView.vue'
import ManageProducts from '../views/ManageProducts.vue'


// Reactive state to control active section and sidebar toggle
const activeSection = ref('Home')
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>


<template>
  <div class="app-layout">
    <!-- Toggle Button for Mobile -->
    <button class="menu-toggle" @click="toggleSidebar">☰</button>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ open: sidebarOpen }">
      <nav>
        <ul>
          <li @click="activeSection = 'Dashboard'; sidebarOpen = false">Dashboard</li>
          <li @click="activeSection = 'ShopAdmin'; sidebarOpen = false">Dashboard</li>
          <li @click="activeSection = 'Home'; sidebarOpen = false">Dashboard</li>
          <li @click="activeSection = 'Shops'; sidebarOpen = false">Shops</li>
          <li @click="activeSection = 'ShopProfile'; sidebarOpen = false">Shops Profile</li>
          <li @click="activeSection = 'ManageProducts'; sidebarOpen = false">Manage Products</li>
          <li @click="activeSection = 'Wholesales'; sidebarOpen = false">Wholesales</li>
          <li @click="activeSection = 'Orders'; sidebarOpen = false">Orders</li>
          <li @click="activeSection = 'Sales'; sidebarOpen = false">Sales</li>
          <li @click="activeSection = 'Promotions'; sidebarOpen = false">Promotions</li>
          <li @click="activeSection = 'Cart'; sidebarOpen = false">Cart</li>
          <li @click="activeSection = 'Profile'; sidebarOpen = false">Profile</li>
          <li @click="activeSection = 'ManageUsers'; sidebarOpen = false">Manage Users</li>
          <p>CONFIGURATION</p>
          <li @click="activeSection = 'Settings'; sidebarOpen = false">Settings</li>
        </ul>
      </nav>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <AdminView v-if="activeSection === 'Dashboard'" />
      <ShopAdmin v-if="activeSection === 'ShopAdmin'" />
      <ShopProfile v-if="activeSection === 'ShopProfile'" />
      <ManageProducts v-if="activeSection === 'ManageProducts'" />
      <HomeView v-if="activeSection === 'Home'" />
      <ShopsView v-else-if="activeSection === 'Shops'" />
      <WholesalesView v-else-if="activeSection === 'Wholesales'" />
      <OrdersView v-else-if="activeSection === 'Orders'" />
      <SalesView v-else-if="activeSection === 'Sales'" />
      <PromotionsView v-else-if="activeSection === 'Promotions'" />
      <CartView v-else-if="activeSection === 'Cart'" />
      <ProfileView v-else-if="activeSection === 'Profile'" />
      <ManageUsersView v-else-if="activeSection === 'ManageUsers'" />
      <SettingsView v-else-if="activeSection === 'Settings'" />
      <div v-else></div>
    </div>
  </div>
</template>


<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  background-color: azure;
  overflow: hidden;
  flex-direction: row;
}

.menu-toggle {
  display: none;
  position: fixed;
  top: 0.3rem;
  left: .6rem;
  z-index: 1001;
  border: none;
  padding: 1rem 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
}

.sidebar {
  width: 15%;
  background-color: #030a2b;
  color: white;
  height: 100vh;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  min-height: .6cm;
  margin-bottom: 0.5rem;
  border-radius: 4%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.sidebar li:hover {
  color: #fbfafa;
  background-color: rgba(8, 122, 193, 0.858);
}

.content-section {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #fbfafa;
}

/* Responsive Rules */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    color: #fa6c00;
    background-color: transparent;
    font-size: 2rem;          /* Increase icon size */
    padding: 0.5rem 1rem;     /* Adjust padding */
    border: none;
    cursor: pointer;
    z-index: 1001;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    width: 30%;
    z-index: 1000;
    padding-top: 3.5rem;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .content-section {
    padding-top: 3rem;
  }
}

</style>
