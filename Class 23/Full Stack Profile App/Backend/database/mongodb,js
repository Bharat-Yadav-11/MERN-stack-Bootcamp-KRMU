const mongoose = require('mongoose')


async function connectDB(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Class21Database')
        console.log('database connected successfully....')
        
    } catch (error) {
        console.log('failed to connect to database',error)
        process.exit(1)
    }
}
 
module.exports = connectDB