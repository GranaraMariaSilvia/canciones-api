
const multer = require('multer');
const { diskStorage } = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){      //callback es una funcion que se ejecuta luego de que se realice otra cosa
      const pathStorage = `${__dirname}/../storage`; //aqui le digo que salga y q vaya a la carpeta storage
      cb(null, pathStorage)
    },

    filename:function(req,file,cb){
        const ext = file.originalname.split(".").pop() //esto es para sepaprar y dejar solo la extencion 

        const filename =  `file-${Date.now()}.${ext}` //esto no va devolver nombre del archivo con un numero y la extencion
        cb(null,filename)

    }
});

const upload = multer({storage}) // multer es un middleware , va entre la ruta y el controlador


module.exports = upload;
