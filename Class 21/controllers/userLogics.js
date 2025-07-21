const User = require('../models/user')

const createLogic = async (req,res)=>{
    try {
          const {name, email} = req.body
        // const name = req.body.name
        // const email = req.body.email


        if(!email || !name){
            res.status(400).json({
                success:false,
                message:'data is missing...'
            })
        }

        const user = await User.create({name, email})

        res.status(200).json({
            success:true,
            message:'data created successfully...',
            user
        })

    } catch (error) {
        console.log(error)
           res.status(500).json({
            success:false,
            message:'failed to create data...',error
        })
    }
}

 
 