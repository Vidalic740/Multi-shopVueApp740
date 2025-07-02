<template>
    <div class="container">
      <h1 class="heading">Shop Profile</h1>
      <form @submit.prevent="submitProfile" class="form-grid">
        <!-- Left Column -->
        <div class="form-section">
          <h2 class="section-title">Shop Info</h2>
  
          <div class="input-group">
            <label>Shop Name</label>
            <input type="text" v-model="shop.name" required />
          </div>
  
          <div class="input-group">
            <label>Description</label>
            <textarea v-model="shop.description" rows="3"></textarea>
          </div>
  
          <div class="input-group">
            <label>Location</label>
            <input type="text" v-model="shop.location" />
          </div>
  
          <h2 class="section-title">Contact Info</h2>
  
          <div class="input-group">
            <label>Phone</label>
            <input type="text" v-model="shop.phone" />
          </div>
  
          <div class="input-group">
            <label>Email</label>
            <input type="email" v-model="shop.email" />
          </div>
  
          <div class="input-group">
            <label>Social Media Links</label>
            <input type="text" v-model="shop.social_links" />
          </div>
        </div>
  
        <!-- Right Column -->
        <div class="form-section">
          <h2 class="section-title">Images</h2>
  
          <div class="input-group">
            <label>Logo</label>
            <input type="file" @change="handleLogoUpload" />
          </div>
  
          <div class="input-group">
            <label>Shop Image</label>
            <input type="file" @change="handleShopImageUpload" />
          </div>
        </div>
  
        <!-- Submit -->
        <div class="submit-section">
          <button type="submit">Save Profile</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import api from '../api'
  
  const shop = ref({
    name: '',
    description: '',
    location: '',
    phone: '',
    email: '',
    social_links: '',
    logo: null,
    shop_image: null
  })
  
  function handleLogoUpload(e) {
    shop.value.logo = e.target.files[0]
  }
  
  function handleShopImageUpload(e) {
    shop.value.shop_image = e.target.files[0]
  }
  
  async function submitProfile() {
    const formData = new FormData()
    for (const key in shop.value) {
    if (shop.value[key]) {
            formData.append(key, shop.value[key])
        }
    }

    const token = localStorage.getItem('token') // ✅ FIX

    try {
        await api.post('/shops', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
         })
        alert('Shop profile saved!')
        } catch (err) {
            console.error('Error saving shop profile:', err.response?.data || err.message)
            alert('Failed to save shop profile')
        }
    }

  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1rem;
  }
  
  .heading {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }
  
  .form-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-section {
    flex: 1 1 45%;
  }
  
  .input-group {
    margin-bottom: 1.25rem;
  }
  
  .input-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #444;
  }
  
  .input-group input,
  .input-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  .section-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #444;
  }
  
  .submit-section {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
  
  .submit-section button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .submit-section button:hover {
    background-color: #2980b9;
  }
  </style>
  