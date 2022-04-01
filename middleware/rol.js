
const {handleHttpError}= require('../utils/handleError');
const {usersModels}= require ('../models')


//array con los roles permitidos
const checkRol = (role) => (req,res,next) => {
    try {
        const {user} = req;
        console.log(user);
        const rolesByUser = user.role;

const checkvalueRol = role.some((rolsingle)=> rolesByUser.includes(rolsingle))// esto devuelve true o false dependiendo si existe ese valor
 if(!checkvalueRol){
    handleHttpError(res,"USER_NOT_PERMISSION",403) 
    return
 }
        next();
     
    } catch (error) {
       handleHttpError(res,"ERROR_PERMISSION",403) 
    }
}
   



module.exports = checkRol