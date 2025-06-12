<template>
  <div class="main-section">
    <div class="double-section">
      <section class="right" >
        <div class="product-image">
          <img src="@/assets/images/furniture.jpg" alt="Product Image">
        </div>
      </section>
      <section class="left" >
        <h3>Product-Name</h3>
        <div class="produc-details">
          <p>Skjlk;haforihkjabkfjagrui;fgi;auhfr;akfhaeoiurhkjfagbiuhriuagh;ofruh<br>jhdgajhvfjahfgaljhfjvfajlllfgakdjgfak;jdgfiwugfkjagdfiuegfa;kjdfbai;uegfkjf;<br>hvjhdfgvljadgfigkjahfdepir;aakjdkmcn,mxnc;pakjdbbzmvblajkfgpauiehfkjabdafuerpwaoiehf akjfba;uk</p>
        </div>
      <div class="shops-list"></div>

      <div class="buttons-section">
        <div class="button">
          <p>Order</p>
        </div>

        <div class="button">
          <p>Add to Cart</p>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>
<style scoped>
.main-section{
  height:auto;
  width: 100%;
  background-color: #f9f9f9;
}

.double-section{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

/*Right Section*/
.right{
  height: 540px;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
}

.product-image img{
  max-height: 440px;
  width:100%;
}

/*Left Section*/
.left{
  height: 540px;
  width: 46%;
  color: #000000;
}

.buttons-section{
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.button{
  height: 36px;
  width: 160px;
  background-color: #823453;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
}

.button p{
  font-size: 20px;
}
</style>
