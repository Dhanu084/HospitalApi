const mongoose = require('mongoose');
//create schema
const productsSchema = mongoose.Schema({
    name:{
        type:String,
    },
    quantity:{
        type:Number,
    }
});

const Product = mongoose.model('Product',productsSchema);//model the schema
//export the product
module.exports = Product;