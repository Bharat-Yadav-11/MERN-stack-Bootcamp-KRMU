const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model('Media', mediaSchema)