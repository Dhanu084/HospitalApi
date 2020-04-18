const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    patients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]
},{
    timeStamps : true
});

const Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor;