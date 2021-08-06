// import dependencies
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import sample data
import users from './data/users.js'
import products from './data/products.js'

// import models 
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import connectDB from './config/db.js'

// config with environment variables 
dotenv.config()

// establish a connection with mongoose
connectDB()

// function that imports data from the file
const importData = async () => {
    try {
        // clear out the data models using mongoose methods deleteMany
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // insert the users from data file
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return {
                ...product, user: adminUser
            }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

// function that destroys data
const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}