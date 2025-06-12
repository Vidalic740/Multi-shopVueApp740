<script setup>
const shops = [
  {
    id: 1,
    name: 'Tech Haven',
    image: 'https://via.placeholder.com/300x200?text=Tech+Haven',
    bio: 'Your go-to place for gadgets, accessories, and tech tools.',
    location: 'Nairobi, Kenya'
  },
  {
    id: 2,
    name: 'Style Street',
    image: 'https://via.placeholder.com/300x200?text=Style+Street',
    bio: 'Fashion meets elegance — trendy outfits for all occasions.',
    location: 'Lagos, Nigeria'
  },
  {
    id: 3,
    name: 'Green Market',
    image: 'https://via.placeholder.com/300x200?text=Green+Market',
    bio: 'Organic products and local produce directly from the farm.',
    location: 'Accra, Ghana'
  }
];
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Explore Registered Shops</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="shop in shops" :key="shop.id" class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <img :src="shop.image" alt="Shop Image" class="w-full h-48 object-cover" />

        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ shop.name }}</h2>
          <p class="text-gray-600 text-sm mb-4">{{ shop.bio }}</p>
          <p class="text-gray-500 text-xs">
            <i class="fas fa-map-marker-alt mr-1"></i>{{ shop.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
