var exports = module.exports = {},
    constants = require('../utils/constant'),
    userModel = require('../models/user')

exports.getUser = async (name)=>{
    try{
        let user = await userModel.findOne({name})
        return user
    }catch(e){
        console.log(e)
        return false
    }
}

