const jwt = require('jsonwebtoken')
const config = require('config');


module.exports = function(req,res,next){
    // Get token from header
    const token = req.header('x-auth-token')

    //check if not token
    if(!token) {
        return res.status(404).json({msg:"No token,suthoration denied"})
    }

    //verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg:"token is not valid"})
    }
}