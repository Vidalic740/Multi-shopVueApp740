<script setup>
import heroImage from '@/assets/images/computer&accessories.png';

</script>

<template>
  <div class="homepage">
    <!-- Side by Side Sections -->
    <section class="sides">
      <!-- Right Section -->
      <div class="right-section">
        <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
          <p>Discover, Collect &<br>Create your own Shop.</p>
          <div class="buttons">
            <div class="discover-btn">Discover</div>
            <div class="create-btn">Create Your Shop</div>
          </div>
        </section>

        <div class="horizontal-holder">
          <ul>
            <li>New Arrival</li>
            <li>Trendy</li>
            <li>Popular</li>
            <li>Recommend</li>
          </ul>
        </div>

        <!-- Products -->
        <section class="featured">
          <h2>Products</h2>
          <div class="product-grid">
            <div class="product-card" v-for="n in 36" :key="n">
              <img :src="`https://via.placeholder.com/150?text=Product+${n}`" alt="Product" />
              <p>Product {{ n }}</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Left Section -->
      <div class="left-section">
        <section class="card">
          <div class="title">
            <div>Popular Products</div>
            <div class="see-all">See All</div>
          </div>
          <div class="products" v-for="(product, index) in popularProducts" :key="'popular-' + index">
            <div class="image" :style="{ backgroundImage: `url(${product.image})` }"></div>
            <div class="info">
              <ul>
                <li><strong>Product Name:</strong> {{ product.name }}</li>
                <li><strong>Product Details:</strong> {{ product.details }}</li>
                <li><strong>Product Price:</strong> {{ product.price }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="title">
            <div>Top Seller</div>
            <div class="see-all">See All</div>
          </div>
          <div class="products" v-for="(product, index) in popularProducts" :key="'top-' + index">
            <div class="image" :style="{ backgroundImage: `url(${product.image})` }"></div>
            <div class="info">
              <ul>
                <li><strong>Product Name:</strong> {{ product.name }}</li>
                <li><strong>Product Details:</strong> {{ product.details }}</li>
                <li><strong>Product Price:</strong> {{ product.price }}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 S.A. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* === Keep your existing CSS styles — they're well structured === */
/* You don't need to change your style section unless you're adding animation or transitions. */
</style>


<style scoped>
.homepage {
  height: auto;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2f2f2f;
  background-color: rgb(202, 202, 202);
}

/*Sise by side sections*/
.sides{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

/*Right-Section*/
.right-section{
  width: 72%;
  height: auto;
  margin-inline: 0.5rem;
  margin-top: .5rem;
}

.hero {
  background-color: #070315;
  background-size: cover;
  background-position: center;
  padding: 5rem 1rem;
  border-radius: 1rem;
}

.hero p {
  margin: 0.5rem 0 1.5rem;
  color: rgb(255, 255, 255);
  font-size: 4.2rem;
  font-weight: 800;
}

.buttons{
  display: flex;
  flex-direction: row;
}

.discover-btn{
  width: 15%;
  min-height: 5vh;
  background-color: rgb(237, 236, 236);
  color: rgb(5, 76, 138);
  border-radius: 0.4cm;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: .8rem;
  margin-left: 4rem;
}

.discover-btn:hover{
  background-color: rgb(221, 90, 2);
}

.create-btn{
  width: 15%;
  min-height: 5vh;
  background-color: transparent;
  border-color: #000000;
  color: aliceblue;
  border-radius: 0.4cm;
  display: flex;
  justify-content: center;
  align-items: center;
}

.create-btn:hover{
  background-color: rgb(10, 115, 207);
}

.horizontal-holder ul{
  display: flex;
  flex-direction: row;
  
}

.horizontal-holder li{
  margin-left: 2rem;
  text-decoration: underline;
  list-style: none;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
}

/* Featured Products */
.featured {
  padding: 0rem 1rem;
}

.product-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.product-card {
  width: 240px;
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

/*Left-Section*/
.left-section{
  width: 25%;
  height: auto;
  margin-inline: 0.5rem;
}

.card{
  height: auto;
  border-radius: .5cm;
  background-color: #f9f9f9;
}

.title{
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5%;
}

.see-all{
  color: rgb(2, 143, 243);
  text-decoration: underline;
  cursor: pointer;
}

.products{
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-bottom: 3%;
}

.image{
  width: 30%;
  height: 10vh;
  background-image: url('@/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
}

/* Footer */
.footer {
  text-align: center;
  padding: .1rem;
  background-color: #060711;
  margin-top: 2rem;
  color:aliceblue;
}


/*Media Responsive*/
@media screen and (max-width: 1024px) {
  .sides {
    flex-direction: column;
  }

  .right-section,
  .left-section {
    width: 100%;
    margin: 0;
  }

  .hero p {
    font-size: 2.5rem;
    text-align: center;
  }

  .buttons {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .discover-btn,
  .create-btn {
    width: 60%;
    margin: 0.5rem 0;
  }

  .product-grid {
    justify-content: center;
  }
}

@media screen and (max-width: 600px) {
  .hero p {
    font-size: 2rem;
  }

  .horizontal-holder ul {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  .horizontal-holder li {
    margin: 0.5rem 0;
  }

  .product-card {
    width: 90%;
  }

  .products {
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 80%;
    height: 15vh;
  }

  .info ul {
    padding: 0;
  }
}

</style>
