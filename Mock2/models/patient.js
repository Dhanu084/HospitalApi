const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        unique:true
    },
    report:[{
        type:mongoose.Schema.Types.ObjectId,
    }]
},{
    timeStamps : true
});

const Patient = mongoose.model('Patient',PatientSchema);
module.exports = Patient;