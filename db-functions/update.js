var exports = module.exports = {},
    userModel = require('../models/user')

exports.updateUser = async(name)=>{
    try{
        let user = await userModel.findOne({name})
        if(!user.lastname){
            user.lastname = "SHAIDA"
            await user.save()
            return true
        }
    }catch(e){
        console.log(e)
        return false
    }
}




