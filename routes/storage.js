
const express = require('express');
const {validatorGetItem} =require('../validator/storage')

const upload = require('../utils/handleStorage')
const router = express.Router();
const {createItem,getItem,getItems,deleteItem,updateItem} = require('../controllers/storage');




//listar items
router.get('/', getItems)

//detalle de un item
router.get('/:id', validatorGetItem, getItem);


//crear un item
router.post('/',upload.single("myFile"),createItem)


//router.put('/:id', updateItem)

//eliminar item
router.delete('/:id', validatorGetItem, deleteItem);


module.exports = router