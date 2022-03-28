
const express = require('express');

const upload = require('../utils/handleStorage')
const router = express.Router();
const {createItem} = require('../controllers/storage')


router.post('/',upload.single("myFile"),createItem)


module.exports = router