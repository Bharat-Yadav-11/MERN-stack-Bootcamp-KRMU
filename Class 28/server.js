const express=  require('express')
const app = express()

const port = 4000

const fileUpload = require('express-fileupload')
app.use(fileUpload({ 
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
 
app.use(express.json())

const router = require('./routes/mediaRoute')
app.use(router)



const  connectDB = require('./database/mongodb')
connectDB()

const ConnectCloudinary = require('./database/cloudinary')
ConnectCloudinary()


app.listen(port,()=>{
    console.log('server is running in port',port)
})

