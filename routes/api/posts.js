const express = require('express')
const router = express.Router();

//route
router.get('/',(req,res) => {
    res.send("posts route")
})

module.exports = router;