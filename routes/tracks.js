const express= require('express');
const router = express.Router();
const customHeader =require('../middleware/customHeader');
const {validatorCreateItem,validatorGetItem } = require('../validator/tracks')
const { getItems,createItem,getItem,updateItems,deleteItem } = require('../controllers/tracks');





//todos los items
router.get('/',getItems);

//detalle de un item
router.get('/:id', validatorGetItem,
 getItem);

//crear un registro
router.post("/",
 validatorCreateItem, // falta me da error y no crea el objeto
    createItem
);
    
//actualizar item
router.put("/:id", validatorGetItem,
validatorCreateItem, 
updateItems
);

router.delete("/:id", 
validatorGetItem,
 // falta me da error y no crea el objeto
deleteItem
);

module.exports = router