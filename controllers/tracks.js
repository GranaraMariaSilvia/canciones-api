

const {tracksModels} = require('../models')

const getItems = async (req,res)=>{
    const data = await tracksModels.find({})

    res.send({data})

}
const getItem = (req,res)=>{


}
const createItem = async (req,res)=>{
    const {body} = req
    console.log(body)
    const data = await tracksModels.create(body)
    res.send({data})
}



const updateItems = (req,res)=>{}
const deleteItems = (req,res)=>{}


module.exports ={ getItems,getItem,createItem,updateItems,deleteItems}