<script setup>
import { ref, onMounted } from 'vue';

const shops = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/shops');
    if (!response.ok) throw new Error('Failed to fetch shops');

    const data = await response.json();
    shops.value = data.map(shop => ({
      name: shop.name,
      image: shop.logo || 'https://via.placeholder.com/300x200?text=No+Image',
      bio: shop.description || 'No bio available',
      location: shop.location || 'Unknown'
    }));
  } catch (err) {
    console.error('Error loading shops:', err);
  }
});
</script>


<template>
  <div class="container">
    <h1 class="heading">Explore Registered Shops</h1>

    <div class="shop-grid">
      <div v-for="shop in shops" :key="shop.id" class="shop-card">
        <img :src="shop.image" alt="Shop Image" class="shop-image" />

        <div class="shop-content">
          <h2 class="shop-name">{{ shop.name }}</h2>
          <p class="shop-bio">{{ shop.bio }}</p>
          <p class="shop-location">
            📍 {{ shop.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.heading {
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.shop-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .shop-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .shop-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.shop-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.3s ease;
}

.shop-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

.shop-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.shop-content {
  padding: 1rem;
}

.shop-name {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000000;
}

.shop-bio {
  font-size: 0.95rem;
  color: #090909;
  margin-bottom: 1rem;
}

.shop-location {
  font-size: 0.85rem;
  color: #090909;
}
</style>
