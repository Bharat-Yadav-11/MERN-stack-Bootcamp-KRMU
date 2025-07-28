const express = require('express')
const route = express.Router()

const { readLogic, createLogic, updateLogic, deleteLogic } = require('../controllers/userLogics')


route.get('/readData', readLogic)

route.post('/createData' , createLogic)

route.put('/updateData/:id', updateLogic)

route.delete('/deleteData/:id', deleteLogic)

module.exports = route 