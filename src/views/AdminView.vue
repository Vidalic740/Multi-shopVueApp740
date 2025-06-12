<template>
   <div class="main">
     <div class="cards-grid">
       <div class="card">
          <h5>Registered Users</h5>
          <p>200</p>
       </div>

       <div class="card">
          <h5>Registered Shops</h5>
          <p>60</p>
       </div>

       <div class="card">
         <h5>Approved Shops</h5>
         <p>50</p>
       </div>
     </div>

     <section class="analytics">
       <div class="analytics-grid">
         <div class="">
         </div>
       </div>
     </section>
   </div> 
</template>
<style scoped>
.main{
  height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  padding-top: 10px;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.card{
  background-color: #0d0324;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 10px rgb(3, 167, 22);
  transition: transform 0.3s ease;
}

.card:hover{
  transform: translateY(-5px);
}

.card h5{
  font-size: 20px;
  color: #dbd3d3;
}

.analytics{
  height: 60vh;
  width: 100%;
  background-color: #161245;
  margin-top: 40px;
}
</style>
