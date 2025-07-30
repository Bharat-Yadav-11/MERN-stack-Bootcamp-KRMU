const User = require('../models/user')
const jwt = require('jsonwebtoken')
const auth = async (req,res,next)=>{
    try{
       
        const token = req.cookies.tokenCookie

        console.log(token) 

        if(!token){
            return res.status(500).json({
                success:false,
                message:'token is missing...'
            })
        }

          const jwt_secret_key = 'jsonToken'


        const payload = jwt.verify(token, jwt_secret_key)
        console.log(payload)

        if(!payload){
         return res.status(500).json({
                success:false,
                message:'invalid user token is not verify...'
            })
        }

        req.user = payload

        next()
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to authenticat....'
        })
    }
}


const isAuthor = async(req,res,next)=>{
    try {
        const {role} = req.user

        if(!role){
            return res.status(400).json({
                success:false,
                message:'role did not found... '
            })
            
        }
        
        if(role !=='Author'){
            return res.status(400).json({
                success:false,
                message:'user is not author '
            })

        }
        
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to check author....'
        })
        
    }
}
const isReader = async(req,res,next)=>{
    try {
        const {role} = req.user

        if(!role){
            return res.status(400).json({
                success:false,
                message:'role did not found... '
            })
            
        }
        
        if(role !=='Reader'){
            return res.status(400).json({
                success:false,
                message:'user is not Reader '
            })

        }

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to check author....'
        })
        
    }
}

module.exports = {auth, isAuthor, isReader}