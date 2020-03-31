const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products_api');//create the db products_api and connect to it

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to DB"));

db.once('open',function(){
    console.log("Connected to mongo");
})

module.exports = db;//export the db