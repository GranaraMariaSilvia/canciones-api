const bcryptjs = require('bcrypt');


//para encriptar texto, recibo el texto plano

const encrypt = async (passwordPlain)=>{
   const hash =  await bcryptjs.hash(passwordPlain, 10)
   return hash
}

//pasar contraseña sin encriptar y la encriptada
//va a comparar y ver si son lo mismo
const compare = async (passwordPlain, hashPassword)=>{
   return await bcryptjs.compare(passwordPlain, hashPassword)

}



module.exports={ encrypt, compare}