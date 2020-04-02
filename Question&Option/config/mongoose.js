const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Questions');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to DB"));

db.once('open',function (){
    console.log("Connected to DB");
});

module.exports = db;