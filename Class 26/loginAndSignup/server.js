const express = require('express')
const app = express()


const port = 4000

const connectDB = require('./database/mongodb')
connectDB()

app.listen(port, ()=>{
    console.log('server is created successfully...')
})

