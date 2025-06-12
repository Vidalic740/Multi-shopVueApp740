<script setup>
import { ref } from 'vue'

// Import views
import AdminView from '../views/AdminView.vue'
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

// Reactive state to control which view is displayed
const activeSection = ref('Home')
</script>

<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <div class="sidebar">
      <nav>
        <ul>
          <li @click="activeSection = 'Dashboard'">Dashboard</li>
          <li @click="activeSection = 'Home'">Home</li>
          <li @click="activeSection = 'Shops'">Shops</li>
          <li @click="activeSection = 'Wholesales'">Wholesales</li>
          <li @click="activeSection = 'Orders'">Orders</li>
          <li @click="activeSection = 'Sales'">Sales</li>
          <li @click="activeSection = 'Promotions'">Promotions</li>
          <li @click="activeSection = 'Cart'">Cart</li>
          <li @click="activeSection = 'Profile'">Profile</li>
          <li @click="activeSection = 'ManageUsers'">Manage Users</li>
          <p>CONFIGURATION</p>
          <li @click="activeSection = 'Settings'">Settings</li>
        </ul>
      </nav>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <AdminView v-if="activeSection === 'Dashboard'" />
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

.sidebar {
  width: 15%;
  background-color: #030a2b;
  color: white;
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  min-height: 1.0cm;
  margin-bottom: 0.1rem;
  border-radius: 4%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.sidebar li:hover {
  color: #fbfafa;
  background-color: rgba(8, 122, 193, 0.858);
}

.content-section {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
</style>
