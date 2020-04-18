const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Report = mongoose.model('Report',reportSchema);

module.exports = Report;