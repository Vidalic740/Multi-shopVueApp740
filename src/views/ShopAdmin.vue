<script setup>
const shops=[
    {
        id: 1,
        value: '200',
        text: 'Total Products',
    },

    {
        id: 2,
        value: '60',
        text: 'Total Orders',
    },

    {
        id: 3,
        value: '200,000',
        text: 'Total Revenue',
    },

    {
        id: 4,
        value: '10',
        text: 'Pending Delivery',
    },

    {
        id: 5,
        value: '5',
        text: 'Unpicked Products',
    },
]
</script>
<template>
    <div class="container">
        <h1 class="heading">Vendor Dashboard</h1>
        <div class="shop-grid">
            <div v-for= "shop in shops" :key="shop.id" class="shop-card">
                <div class="card-content">
                    <p class="value">{{ shop.value }}</p>
                    <h2 class="text">{{ shop.text }}</h2>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style scoped>
.container{
    padding: .5rem;
    max-width: 1300px;
    margin: 0 auto;
}

.heading{
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.shop-grid{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    justify-content: center;
}

@media(max-width: 760px){
    .shop-grid{
        grid-template-columns: 1fr 1fr;
    }
}

@media(max-width: 1024px){
    .shop-grid{
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.shop-card{
    height: 150px;
    width: 190px;
    background-color: #fff;
    box-shadow: 0 4px 8px #020989;
    border-radius: 10px;
}

.shop-card:hover{
    box-shadow: 0 6px 14px #fa6800;
}

.card-content{
    padding: 1rem;
}

.value{
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text{
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>