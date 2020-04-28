const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    name :String,
    age: Number,
    lastname:String
});

module.exports = mongoose.model("User", userSchema);
