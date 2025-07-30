const mongoose = require('mongoose')


const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mediaApp')
        console.log('database connected successfully...')
    } catch (error) {
        console.log(error)
        console.log('failed to connect to database...')
        process.exit(1)
    }
}


module.exports = connectDB