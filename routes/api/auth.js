const express = require('express')
const router = express.Router();
const auth = require("../../middlewere/auth")
const {check,validationResult} = require("express-validator")
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const User = require('../../models/User')
//@route GEt api/auth
//@desc 
//@access Public
router.get('/',auth,async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("error happaned")
    }
})
//@route Post api/auth
//@desc authenticate user & get token
router.post('/',[
    check('email','Please include a valid email').isEmail(),
    check('password','password required').exists()
], async (req,res) => {
    const errors = validationResult(req);
    //if postReq is bad it shows status of 400 and return errors of array.
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {email,password} = req.body;

    try {
        let user = await User.findOne({email})
         //see if user exsits
        if(!user) {
          return  res.status(400).json({errors: [{msg:'invalid Credentials.'}]});
        }
    
      const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return  res.status(400).json({errors: [{msg:'invalid Credentials.'}]});
        }
    
    //Return jsonwebtoken

        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn:36000},
            (err,token) => {
                if(err) throw err;
                    res.json({token})
            }
            )

   
    } catch (error) {
        console.log(error.message);
        res.status(500).send("server error");
    }
   



   
})

module.exports = router;