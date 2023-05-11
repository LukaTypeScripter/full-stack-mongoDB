const express = require('express')
const router = express.Router();

//route Auth
router.get('/',(req,res) => {
    res.send("Auth route")
})

module.exports = router;