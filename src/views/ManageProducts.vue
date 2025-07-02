<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const BASE_URL = 'http://localhost:3000' 

const showModal = ref(false)
const editModal = ref(false)

const productName = ref('')
const productCategory = ref('')
const productPrice = ref(0)
const productStatus = ref('active')
const productStock = ref(0)
const productDescription = ref('')
const productSpecifications = ref('')
const productImages = ref([])
const imageModalVisible = ref(false)
const currentImages = ref([])
const currentProductId = ref(null)

const editingProduct = ref(null)
const products = ref([])

const categories = [
  'Electronics', 'Clothing', 'Groceries', 'Books', 'Beauty', 'Computers & Laptops',
  'Construction', 'Gardening', 'Utensils', 'Accessories', 'Men`s Footware', 'Women`s Footware',
  'Baby Clothings', 'Kids Toys', 'Furnitures', 'Home Appliances', 'Sports', 'Mechanical Tools', 'Phones'
]

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  productName.value = ''
  productCategory.value = ''
}

function openEditModal(product) {
  editingProduct.value = product
  productPrice.value = product.price
  productStatus.value = product.status
  productStock.value = product.units_in_stock
  productDescription.value = product.description || ''
  productSpecifications.value = product.specifications || ''
  editModal.value = true
}

function closeEditModal() {
  editModal.value = false
  editingProduct.value = null
}

function handleImageUpload(event) {
  productImages.value = Array.from(event.target.files).slice(0, 5)
}

async function addProduct() {
  if (!productName.value || !productCategory.value) {
    alert('Please fill in both fields.')
    return
  }

  try {
    await api.post('/products', {
      name: productName.value,
      category: productCategory.value
    })
    alert('Product added successfully!')
    fetchProducts()
    closeModal()
  } catch (error) {
    console.error('Add product error:', error.response?.data || error.message)
    alert('Error adding product')
  }
}

async function fetchProducts() {
  try {
    const res = await api.get('/products')
    products.value = res.data
  } catch (error) {
    console.error('Fetch products error:', error)
  }
}

async function updateProduct() {
  try {
    const formData = new FormData()

    formData.append('price', productPrice.value)
    formData.append('status', productStatus.value)
    formData.append('units_in_stock', productStock.value)
    formData.append('description', productDescription.value)
    formData.append('specifications', productSpecifications.value)

    // Add existing images IDs (assuming each image object has an id property)
    // For example, send an array of IDs to keep
    const existingImageIds = editingProduct.value.images?.map(img => img.id) || [];
    formData.append('existing_image_ids', JSON.stringify(existingImageIds));

    // Add new image files
    productImages.value.forEach(file => {
      formData.append('images[]', file)
    })

    await api.post(`/products/${editingProduct.value.id}/update-with-images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    alert('Product updated successfully!')
    fetchProducts()
    closeEditModal()
  } catch (error) {
    console.error('Update product error:', error.response?.data || error.message)
    alert('Error updating product')
  }
}

function viewImages(product) {
  try {
    currentProductId.value = product.id
    currentImages.value = product.images || []
    imageModalVisible.value = true
  } catch (err) {
    console.error('Error viewing images', err)
    alert('Failed to load images.')
  }
}

function closeImageModal() {
  imageModalVisible.value = false
  currentProductId.value = null
  currentImages.value = []
}

async function deleteImage(index) {
  const confirmDelete = confirm('Are you sure you want to delete this image?')
  if (!confirmDelete) return

  const imageToDelete = currentImages.value[index]

  try {
    const res = await api.post(`/products/${currentProductId.value}/delete-image`, {
      imageUrl: imageToDelete
    })

    currentImages.value = res.data.images
    fetchProducts()
    alert('Image deleted successfully')
  } catch (err) {
    console.error('Image delete error:', err)
    alert('Failed to delete image.')
  }
}

onMounted(fetchProducts)
</script>


<template>
  <div class="container">
    <h1 class="heading">Manage Products</h1>
    <div class="button" @click="openModal">Add Product</div>

    <div class="modal-overlay" v-if="showModal">
      <div class="modal">
        <h2>Add New Product</h2>
        <label>
          Product Name:
          <input type="text" v-model="productName" />
        </label>
        <label>
          Category:
          <select v-model="productCategory">
            <option disabled value="">Select Category</option>
            <option v-for="cat in categories" :key="cat">{{ cat }}</option>
          </select>
        </label>

        <div class="modal-actions">
          <button @click="addProduct">Submit</button>
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>

    <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Category</th>
      <th>Price</th>
      <th>Status</th>
      <th>Stock</th>
      <th>Description</th>
      <th>Specifications</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="prod in products" :key="prod.id">
      <td>{{ prod.id }}</td>
      <td>{{ prod.name }}</td>
      <td>{{ prod.category }}</td>
      <td>{{ prod.price }}</td>
      <td>{{ prod.status }}</td>
      <td>{{ prod.units_in_stock }}</td>
      <td>{{ prod.description }}</td>
      <td>{{ prod.specifications }}</td>
      <td>
        <button @click="openEditModal(prod)">Edit</button>
        <button @click="viewImages(prod)">Images</button>
      </td>
    </tr>
  </tbody>
</table>

  <!-- Edit Modal -->
  <div class="modal-overlay" v-if="editModal">
    <div class="modal">
      <h2>Edit Product</h2>
      <label>
        Price:
        <input type="number" v-model="productPrice" />
      </label>
      <label>
        Stock:
        <input type="number" v-model="productStock" />
      </label>
      <label>
        Status:
        <select v-model="productStatus">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <label>
        Description:
        <textarea v-model="productDescription" rows="3"></textarea>
      </label>
      <label>
        Specifications:
        <textarea v-model="productSpecifications" rows="3"></textarea>
      </label>

      <label>
        Upload Images (Max 5):
        <input type="file" multiple accept="image/*" @change="handleImageUpload" />
      </label>
      <div v-if="productImages.length">
        <p>Selected Images:</p>
        <ul>
          <li v-for="(img, i) in productImages" :key="i">{{ img.name }}</li>
        </ul>
      </div>
      <div class="modal-actions">
        <button @click="updateProduct">Update</button>
        <button @click="closeEditModal">Cancel</button>
      </div>
    </div>
  </div>

  <!-- Image Preview Modal -->
<div class="modal-overlay" v-if="imageModalVisible">
  <div class="modal">
    <h2>Product Images</h2>
    <div v-if="currentImages.length === 0">No images uploaded.</div>
    <div v-else class="image-preview-grid">
      <div v-for="(img, idx) in currentImages" :key="idx" class="image-item">
        <img :src="`${BASE_URL}/uploads/products/${img.id}${img.ext}`" alt="Product Image" />
        <button @click="deleteImage(idx)">Delete</button>
      </div>
    </div>
    <div class="modal-actions">
      <button @click="closeImageModal">Close</button>
    </div>
  </div>
</div>
  </div>
</template>


<style scoped>
.container {
  max-width: 1300px;
  margin: 0 auto;
}

.heading {
  font-size: 2rem;
  color: #333;
}

.button {
  width: 160px;
  height: 42px;
  background-color: rgb(219, 213, 211);
  color: rgb(15, 13, 13);
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px 2px #412993;
}

.button:hover {
  background-color: darkorange;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  text-align: left;
  color: #333;
}

.modal h2 {
  margin-bottom: 1rem;
}

.modal label {
  display: block;
  margin-bottom: 1rem;
}

.modal input,
.modal select {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.modal-actions button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  background-color: coral;
  color: white;
  cursor: pointer;
}

.modal-actions button:hover {
  background-color: darkorange;
}

.modal textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
}


table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

thead {
  background-color: #063855;
}

thead th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
  color: #ff6200;
}

tbody td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #555;
}

tbody tr:nth-child(even) {
  background-color: #fafafa;
}

tbody tr:hover {
  background-color: #f0f8ff;
  transition: background-color 0.2s ease-in-out;
}

tbody button {
  background-color: #6c63ff;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

tbody button:hover {
  background-color: #554cd1;
}

.image-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 2fr));
  gap: 12px;
  margin-top: 1rem;
}

.image-item {
  position: relative;
  text-align: center;
}

.image-item img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 6px;
  display: block;
  margin: 0 auto 0.5rem;
}

.image-item button {
  background-color: crimson;
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
}

.image-item button:hover {
  background-color: darkred;
}

</style>
