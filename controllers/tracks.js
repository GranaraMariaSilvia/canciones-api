
const {matchedData} = require('express-validator')
const {tracksModels} = require('../models')
const { handleHttpError } = require('../utils/handleError')

const getItem = async (req,res)=>{
  try {
    req = matchedData(req)  

    const {id} = req
    const data = await tracksModels.findById(id)
    res.send({data})

  } catch (error) {
    handleHttpError(res, 'Error_Get_Item')
  }

}
const getItems = async (req,res)=>{
  try {

        const user = req.user //para saber que usuario es el que esta consumiendo en ese momento esta ruta
        const data = await tracksModels.find({})
        res.send({data , user})
        
    } catch (error) {
        handleHttpError(res, 'Error_Get_Items')
    }
}



const createItem = async (req,res)=>{
   try {
    const body = matchedData(req) // limpia la data que viene del body
     const data = await tracksModels.create(body)
      res.send({data})
        
    } catch (error) {
      console.log(error)
        handleHttpError(res, 'Error_Create_Items')
    }
    }



const updateItems = async (req,res)=>{

    try {
      
        const {id,...body} = matchedData(req)

         const data = await tracksModels.findOneAndUpdate(id, body)
          res.send({data})
            
        } catch (error) {
            handleHttpError(res, 'Error_Update_Items')
        }


}
const deleteItem = async (req,res)=>{

    try {
        req = matchedData(req)  
    
        const {id} = req
        const data = await tracksModels.delete({_id:id})
        res.send({data})
    
      } catch (error) {
        console.log(error)
        handleHttpError(res, 'Error_Delete_Item')
}
}


module.exports = { getItems, getItem, createItem, updateItems, deleteItem };