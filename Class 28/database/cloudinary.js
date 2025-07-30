const cloudinary = require('cloudinary').v2
 
const ConnectCloudinary = ()=>{
   try {
     cloudinary.config({
        cloud_name: 'dailutswl',
        api_key: 314428123517874 ,
        api_secret:  'zzozXsG4TdTWYBFm7brv6sTYw8k',

    })
   } catch (error) {
    console.log('failed to connect to cloudinary...')
   }
}

module.exports = ConnectCloudinary