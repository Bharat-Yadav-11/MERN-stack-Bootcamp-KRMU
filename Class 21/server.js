const express = require('express')
const app = express()


const connectDB = require('./database/mongodb')
connectDB() 

const port  = 4000 


app.listen(port,()=>{
    console.log('server is connected successfully...',port)
})