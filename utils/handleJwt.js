const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;




//recibe el objeto de usuario
const tokenSign = async (user)=>{
    const sign = await jwt.sign(
        {
            _id:user._id,
            role:user.role

        },
        
            JWT_SECRET,
        
        {
            expiresIn:"2h"
        }
          );
          return sign;
};


//tengo que pasarle el token de sesion

const verifyToken = async(tokenJwt)=>{

    try {
         return jwt.verify(tokenJwt,JWT_SECRET)
    } catch (error) {
        console.log(error)
        return null
    }
}


module.exports = {tokenSign, verifyToken}