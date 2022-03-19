
const express = require('express');
const upload = require('../utils/handleStorage')
const router = express.Router();



router.post('/',upload.single("myFile"), (req,res)=>{
    res.send({a:1})
})


module.exports = router