// create an array of users
import bcrypt from 'bcryptjs'

// users can only follow the user schema or else mongooose won't register the users 
const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        // hash syncing the password
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'johndoe@test.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@test.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users