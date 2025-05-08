<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div className = "main">
    <div className = "sidebar">
      <nav>
        <ul>
          <li>Dashboard</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.main{
  height: 95vh;
  width: 98%;
}

.sidebar{
  width: 15%;
  height: 100vh;
  background-color: #782673;
}

</style>
