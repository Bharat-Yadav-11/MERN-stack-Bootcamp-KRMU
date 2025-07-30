const express = require('express')
const fileUpload = require('../controllers/mediaLogics')
const router = express.Router()


router.post('/media', fileUpload)

module.exports = router