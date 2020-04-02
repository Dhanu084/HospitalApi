const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    Question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    text:{
        type:String
    },
    votes:{
        type:Number
    },
    link_to_vote:{
        type:String
    }
});

const Option = mongoose.model('Option',optionSchema);
module.exports = Option;