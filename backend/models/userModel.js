import mongoose from 'mongoose'

// create a schema
// userSchema takes in name, email, password, isAdmin and createdAt
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

// user model
// models are higher order constructors that take a schema and create an instance of a document equivalent to records in relational database
const User = mongoose.model('User', userSchema)

export default User