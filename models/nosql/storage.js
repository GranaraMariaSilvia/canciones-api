const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
       url:{
           type: String,

       },
    
    
        filename:{
            type:Number
        },
    
    
      
    },
    {
        timestamp:true,
        versionKey: false
    }
   
);


 module.exports = mongoose.model("storages",StorageSchema)