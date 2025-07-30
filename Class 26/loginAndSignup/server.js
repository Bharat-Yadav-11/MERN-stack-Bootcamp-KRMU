const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')


app.use(express.json())

app.use(cookieParser())

const port = 4000 

const router = require('./routes/userRoute')
app.use(router)

const connectDB = require('./database/mongodb')
connectDB()

app.listen(port, ()=>{
    console.log('server is created successfully...')
})

