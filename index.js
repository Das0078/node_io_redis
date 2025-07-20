// server.js
require('dotenv').config();
const express = require('express');
const Redis = require('ioredis');
const app = express();
const PORT = 3000;

// Dummy product data
const products = [
  { id: 1, name: 'iPhone 14 Pro', price: 129999 },
  { id: 2, name: 'Samsung Galaxy S23', price: 99999 },
  { id: 3, name: 'Nothing Phone 2', price: 44999 },
];


const reditClient = new Redis({
    port:       process.env.REDIS_PORT, // Redis port
    host:       process.env.REDIS_HOST , // Redis host
    password:   process.env.REDIS_PASSWORD,
}) 

reditClient.on('connect',()=>{
    console.log("Redis connected..."); 
})
 
// Helper function to simulate delay using Promise
function getProductsWithDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000); // 2 seconds delay
  });
}
 
// GET /products route
app.get('/products', async (req, res) => {
  try {
    const isExist = await reditClient.exists('products');
    if(isExist){
        console.log("Cache hitted...");
        const cachedProducts = await reditClient.get('products');
        res.json({ success: true, data: JSON.parse(cachedProducts)});
        return;
    }
    console.log("Cache missed");
    const result = await getProductsWithDelay();
    await reditClient.set('products',JSON.stringify(result));
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
