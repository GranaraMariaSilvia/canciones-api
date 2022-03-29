const express = require('express');
const { matchedData } = require('express-validator');
const { encrypt, compare} =require('../utils/handlePassword');
const {usersModels} = require('../models')
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validator/auth');


router.post('/register', validatorRegister, async (req,res)=>{
    req = matchedData(req)

const passwordHash= await encrypt(req.password)
const body = {...req, password:passwordHash}

const data = await usersModels.create(body)
data.set('password', undefined, {strict:false})
  res.send({data})
});


module.exports = router