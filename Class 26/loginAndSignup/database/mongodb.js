const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/LoginSignup')
        console.log('database connected successfully....')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB