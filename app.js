let express = require("express"),
    app = express(),
    cors = require('cors'),
    constants  = require('./utils/constant'),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

let userRoutes = require('./routes/user');
// App Config

mongoose.connect(constants.DB_URL);

app.use(bodyParser.json({extended: true}));
app.use(cors());


app.use('/user', userRoutes);

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log("Server listening on Port " + 7000)
});


module.exports.app = app;
