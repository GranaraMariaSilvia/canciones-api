const express= require('express');
const fs = require('fs');

const router = express.Router();


const PATH_ROUTES = __dirname //directorio donde se encuentra el archivo


const removeExtencion = (filename)=>{//esta funcion sirve para obtener la palabra y sacarle la extencion
    return filename.split(".").shift()
}

//aqui concatenamos el nombre  de archivo con las rutas
fs.readdirSync(PATH_ROUTES).filter((file)=>{
   const name = removeExtencion(file)
   if(name !== 'index'){ //si el nombre de archivo de arriba es diferente a index 
      router.use(`/${name}`,require(`./${file}`)) //a la ruta le pongo el nombre del archivo y requiero el archivo
   }
});






module.exports = router