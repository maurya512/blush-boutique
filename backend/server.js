// entry point for the server
// requiring express using regular js syntax
const express = require('express')
const products = require('./data/products')
// initialize express
const app = express()

// listen
app.listen(5000, console.log('Server running on port 5000'))


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