<script setup>
</script>

<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <div class="sidebar">
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Shops</li>
          <li>Wholesales</li>
          <li>Orders</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  background-color: azure;
  overflow: hidden;
}

/* Sidebar */
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
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 20px;
}
</style>
