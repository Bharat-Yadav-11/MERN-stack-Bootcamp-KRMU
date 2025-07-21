const express = require('express')
const app = express()

const port = 4000

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Backend...</h1>')
})

app.listen(port,()=>{
    console.log('server is creted',port)
})

