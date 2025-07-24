const User = require('../models/user')

const createLogic = async (req,res)=>{
    try {
        const {name, email} = req.body
  
        if(!name || !email){
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

 
const readLogic = async(req, res)=>{
    try{
        const user = await User.find() 

       if(!user){
        res.status(404).json({
            success:false,
            message:'data not found'
        })
       }

       res.status(200).json({
        success:true,
        message:'data fetched successfully..',
        user
       })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:'failed to fetch data...',error
        })
    }
}


const updateLogic = async(req,res)=>{
    try {
        const {name, email} = req.body

        const{id} = req.params;

        console.log(name, email, id)

        if(!name || !email || !id){
            res.status(400).json({
                success:false, 
                message:'  data is missing for update... '
            })
        }

        let user = await User.findByIdAndUpdate({_id:id} , {name,email})

        res.status(200).json({
            message:'data updated successfully...',
            success:true,
            user
        })



    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'failed to update data....'
        })
    }
}
 

const deleteLogic = async(req,res)=>{
    try{
        const {id} = req.params

        if(!id){
            res.status(400).json({
                success:false,
                message:'id is missing for deletion'
            })
        }

        await User.findByIdAndDelete({_id:id})

        res.status(200).json({
            success:true,
            message:'data deleted successfully...'
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:'failed to delete data...'
        })
    }
}
 
module.exports = {createLogic, readLogic, updateLogic , deleteLogic}