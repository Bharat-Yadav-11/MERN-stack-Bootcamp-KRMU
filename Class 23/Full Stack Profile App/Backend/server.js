const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors({
    origin:'*'
}))

app.use(express.json())

const route = require('./routes/userRoutes')
app.use(route)

const connectDB = require('./database/mongodb,js')
connectDB() 

const port  = 4000  


app.listen(port,()=>{
    console.log('server is connected successfully...',port)
})