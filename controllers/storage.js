
const fs = require('fs');
const { matchedData } = require('express-validator');
const {storageModels} = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req,res)=>{

    try {
        const data = await storageModels.find({})

        res.send({data})
        
    } catch (error) {
        handleHttpError(res, 'Error_Get_Items')
    }
};


const getItem = async(req,res)=>{
try {

    const {id} = matchedData(req)
    const data = await storageModels.findById(id)

    res.send({data})
} catch (error) {
    handleHttpError(res, 'Error_Detail_Item')
}

};



const createItem = async (req,res)=>{

try {
    
    const {body,file} = req
    console.log(file)
const fileData = {
    filename : file.filename,
    url: `${PUBLIC_URL}/${file.filename}`


}
    const data = await storageModels.create(fileData)
    res.send({data})
    
} catch (error) {
    handleHttpError(res, 'Error_Crear_Item')
}

};




const deleteItem = async (req,res)=>{
    try {

       
        const {id} = matchedData(req)
        const dataFile = await storageModels.findById(id)

        await storageModels.delete({_id:id}) //con esto lo elimino de la bd pero queda guardado mantengo la persistencia
    
          const {filename} = dataFile //saco el nombre del archivo
       const filePath = `${MEDIA_PATH}/${filename}` //aqui tengo la ruta mas nombre del archivo
      // fs.unlinkSync(filePath) con esto se elimina el registro fisico y no lo recupero 
    const data ={
        filePath,
        deleted:1

    }

        res.send({data})
    } catch (error) {
        handleHttpError(res, 'Error_Delete_Item')
    }
};


module.exports ={ getItems,getItem,createItem,deleteItem}