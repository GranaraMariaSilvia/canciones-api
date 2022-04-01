const express= require('express');
const router = express.Router();
const {authMiddleware} =require('../middleware/session');

const {validatorCreateItem,validatorGetItem } = require('../validator/tracks')
const { getItems,createItem,getItem,updateItems,deleteItem } = require('../controllers/tracks');
const checkRol = require('../middleware/rol');





//todos los items
router.get('/', authMiddleware, getItems);

//detalle de un item
router.get('/:id',authMiddleware, validatorGetItem,
 getItem);

//crear un registro
router.post("/",
authMiddleware,
checkRol(["admin"]), 
 validatorCreateItem, 
    createItem
);
    
//actualizar item
router.put("/:id",authMiddleware, validatorGetItem,
validatorCreateItem, 
updateItems
);

router.delete("/:id", 
authMiddleware,
validatorGetItem,
 // falta me da error y no crea el objeto
deleteItem
);

module.exports = router