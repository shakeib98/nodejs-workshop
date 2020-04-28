var exports = module.exports = {},
    userModel = require ('../models/user');


exports.insertUser = async (obj)=>{
    try{
        let user = await userModel.create(obj)
        return user
    }catch(e){
        console.log(e)
        return false
    }
}
