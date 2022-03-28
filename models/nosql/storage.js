const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const StorageScheme = new mongoose.Schema(
    {
       url:{
           type: String,

       },
    
    
        filename:{
            type: String
        },
    
    
      
    },
    {
        timestamps:true,
        versionKey: false
    }
   
);

StorageScheme.plugin(mongooseDelete, {overrideMethods: "all"}); //para que sobreescriba los metodos nativos
 module.exports = mongoose.model("storages",StorageScheme)