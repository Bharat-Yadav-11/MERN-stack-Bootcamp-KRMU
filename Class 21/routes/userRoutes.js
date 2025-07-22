const express = require('express')
const { readLogic, createLogic, updateLogic, deleteLogic } = require('../controllers/userLogics')
const route = express.Router()


route.get('/readData', readLogic )

route.post('/createData' , createLogic)

route.put('/updateData/:id', updateLogic)

route.delete('/deleteData/:id', deleteLogic)

module.exports = route 