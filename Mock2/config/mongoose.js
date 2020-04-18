const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospitalApi');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to DB'));

db.once('open',function(err){
    if(err){
        console.log(err);
        return;
    }
});

module.exports = db;