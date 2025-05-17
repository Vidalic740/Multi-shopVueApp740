<script setup>
import heroImage from '@/assets/images/hero.jpg';
</script>

<template>
  <div class="homepage">

    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar-left">
        <h2 class="brand">S.A</h2>
      </div>
      <div class="navbar-right">
        <router-link to="/register" class="nav-link">Register</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
      </div>
    </header>


    <!-- Hero / Banner -->
    <section
      class="hero"
      :style="{ backgroundImage: `url(${heroImage})` }">
        <h1>S.A Shopping Center</h1>
        <p>Compare prices from multiple trusted shops</p>
        <input type="text" placeholder="Search for products..." class="hero-search" />
    </section>

    <!-- Categories -->
    <section class="categories">
        <h2>Shop by Category</h2>
        <div class="category-grid">
            <div class="category-card">
                <img src="@/assets/images/furniture.jpg" alt="Electronics" />
                <p>Furnitures</p>
            </div>
            <div class="category-card">
                <img src="@/assets/images/computer&accessories.png" alt="Computers & Laptops" />
                <p>Computers & Laptops</p>
            </div>
            <div class="category-card">
                <img src="@/assets/images/construction.jpeg" alt="Construction Supplies" />
                <p>Construction</p>
            </div>
            <div class="category-card">
                <img src="@/assets/images/sports.jpeg" alt="Plumbing & Water Systems" />
                <p>Sports</p>
            </div>
            <div class="category-card">
                <img src="@/assets/images/clothing.png" alt="Fashion & Clothing" />
                <p>Fashion & Clothing</p>
            </div>
            <div class="category-card">
                <img src="@/assets/images/home-appliances.jpg" alt="Tools & Hardware" />
                <p>Home Appliances</p>
            </div>
        </div>
    </section>


    <!-- Featured Products -->
    <section class="featured">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <div class="product-card" v-for="n in 12" :key="n">
          <img :src="`https://via.placeholder.com/150?text=Product+${n}`" alt="Product" />
          <p>Product {{ n }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 S.A. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.homepage {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2f2f2f;
  background-color: antiquewhite;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 1rem;
  background-color: transparent; 
  color: black;
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}


.brand {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
}

.navbar-right .nav-link {
  margin-left: 1rem;
  color: black;
  text-decoration: none;
  font-size: 19px;
  font-weight: 800;
}

.navbar-right .nav-link:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  background-image: url('@/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  color: black;
  text-align: center;
  padding: 9rem 1rem;
  position: relative;
}

.hero h1 {
  font-size: 3rem;
}

.hero p {
  margin: 0.5rem 0 1.5rem;
  font-size: 2.2rem;
}

.hero-search {
  padding: 0.75rem;
  width: 60%;
  max-width: 500px;
  border: none;
  border-radius: 5px;
}

/* Categories */
.categories {
  padding: 2rem 1rem;
  text-align: center;
}

.category-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.category-card {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.category-card img {
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #3a3a3a;
  margin-bottom: 0.5rem;
}

.category-card p {
  font-size: 18px;
  font-weight: 500;
  color: #3b3a3a;
  margin-top: 0.5rem;
}

.category-card:hover {
  transform: scale(1.05);
}


/* Featured Products */
.featured {
  padding: 2rem 1rem;
  text-align: center;
}

.product-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.product-card {
  width: 180px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

.product-card img {
  width: 100%;
  border-radius: 4px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #060711;
  margin-top: 2rem;
  color:aliceblue;
}
</style>
