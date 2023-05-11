const express = require('express')
const router = express.Router();

//route
router.get('/',(req,res) => {
    res.send("user route")
})

module.exports = router;