const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
  try {
    const { email, password, name , role } = req.body;



    if (!email || !password || !name ) {
      return res.status(400).json({
        success: false,
        message: "data is missing for signup...",
      });
    }

    let user = await User.findOne({email});

    if (user) {
      return res.status(400).json({
        success: false,
        message: "account has already created by this email...",
      });
    }

    let hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashPassword, role });

    return res.status(200).json({
      success: true,
      message: "account created successfully....",
      user
    });

  }catch(error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "failed to create account...",error
    });
  }
};

 
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "data is missing for login...",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user did not found..",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
   

    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "password did not match....",
      });
    }


    let payload = {
        email:user.email,
        id:user._id,
        role:user.role
    }

    const jwt_secret_key = 'jsonToken'

    const token = jwt.sign(payload, jwt_secret_key, {expiresIn:'2h'})

    let options = {
        httpOnly:true,
        expires:new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    }

    res.cookie('tokenCookie',token, options).status(200).json({
        success:true,
        message:'acount login sucessfully...',
        user,
        token
    })
  } catch (error) {
    res.status(500).json({
        success:false,
        message:'failed to login...',error
    })
  }
};


module.exports = {signup, login}
