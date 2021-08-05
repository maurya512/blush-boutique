// product schema and product model
import mongoose from 'mongoose'

// reviewSchema
const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true,
})

// productSchema
const productSchema = mongoose.Schema({
    // user field to check which admin created which product
    user: {
        // checks for the specific object id
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // references the user model to get access to the user
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    // average rating
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true,
    }
)

// product model
const Product = mongoose.model('Product', productSchema)

export default Product