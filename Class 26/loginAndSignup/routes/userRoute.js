const express = require('express')
const { signup, login } = require('../controllers/userLogics')
const { auth, isReader, isAuthor } = require('../middleware/auth')
const router = express.Router()


router.post('/signup',  signup )

router.post('/login', login)



router.get('/reader', auth, isReader, (req,res)=>{
    console.log('this is reader funtion....')
    res.status(200).json({
        sucess:true,
        message:'this is reader route...'
    })
})


router.get('/author', auth, isAuthor, (req,res)=>{
    res.status(200).json({
        sucess:true,
        message:'this is author route...'
    })
})


module.exports = router
