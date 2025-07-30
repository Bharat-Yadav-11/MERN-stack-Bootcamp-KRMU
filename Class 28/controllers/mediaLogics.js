const Media = require('../models/media')
const path = require('path')
const cloudinary = require('cloudinary').v2

const fileUpload = async(req,res)=>{
    try{    
      
        const {name} = req.body

        const {image} = req.files

        console.log(image)
 
        if(!name || !image){
            return res.status(400).json({ 
                success:false,
                message:'data is missing...'
            })
        } 

        const supportedFile = ['.jpg', '.jpeg', '.png']
 
        const FileExt = path.extname(image.name)
        
        if(supportedFile.includes(FileExt)){
            const mediaResponse = await cloudinary.uploader.upload(image.tempFilePath, {folder:'BlogApp', resource_type:'auto'})
            console.log(mediaResponse)

            await Media.create({name, image:mediaResponse.secure_url})

        }else{
            return res.status(400).json({
                success:true,
                message:'file extension did not support....'
            })
        }

        return res.status(200).json({
            success:true,
            message:'file uploaded sucessfully...'
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
        success:false,
        message:'failed to upload data...'
        })
    }
}


module.exports =  fileUpload