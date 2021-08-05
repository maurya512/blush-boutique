// entry point for the server
// requiring express using regular js syntax
const express = require('express')
// setup dot env variables 
const dotenv = require('dotenv')
const products = require('./data/products')

// dotenv config lets us use all the hidden env variables 
dotenv.config()
// initialize express
const app = express()


const PORT = process.env.PORT || 5000
// listen
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}` ))


// get request
app.get('/', (req, res) => {
    res.send('API is running...')
})

// api routes to get all the products
app.get('/api/products', (req, res) => {
    // converts the array of objects into json type for the web browser
    res.json(products)
})

// api routes to get single product
app.get('/api/products/:id', (req, res) => {
    // "find" a product from the products array and match it's id with the id from the url and see if it matches. 
    // if matches store that product inside a variable and send that data as a json to the web browser
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})