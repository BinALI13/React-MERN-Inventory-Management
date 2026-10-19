
// imports
const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const morgan = require('morgan')
const cors = require('cors')
const connectToDB = require('./db.js')
const ProductsRoutes = require("./routes/product.routes.js")

// Middleware
app.use(
    cors({
        origin: process.env.CLIENT_URL || 'http://localhost:5173',
    })
);

app.use(express.json())
app.use(morgan('dev'))

app.use("/products", ProductsRoutes)

// Routes
app.get('/test',(req,res)=>{
  res.json({message: 'App Works'})
})

// connect to database and listen on Port 3000
async function startServer() {
    const PORT = process.env.PORT || 3000;
    await connectToDB();

    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
}

startServer();
