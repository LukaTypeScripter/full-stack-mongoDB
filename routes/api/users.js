const express = require('express')
const router = express.Router();
const gravitar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check,validationResult} = require("express-validator")

const User = require('../../models/User')

//@route Post api/users
//@desc Register/users,using express validator to check fields.
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','please enter a password with 6 or more characters').isLength({min:6})
], async (req,res) => {
    const errors = validationResult(req);
    //if postReq is bad it shows status of 400 and return errors of array.
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {name,email,password} = req.body;

    try {
        let user = await User.findOne({email})
         //see if user exsits
        if(user) {
          return  res.status(400).json({errors: [{msg:'user already exsisted.'}]});
        }
        //get users gravatar
        const avatar = gravitar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })
    //Encrypt password
        const salt =await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt)
       await user.save();
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