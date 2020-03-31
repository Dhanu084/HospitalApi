const Product = require('../models/products');

//controller to create product
module.exports.createProduct = async function(req,res){
    if(req.body==undefined){//handle proper routes
        req.status(401).json({
            data:"No record found to insert"
        })
    }
        try{
            let products = await Product.create({//create the documents with the values in the req.body
                name:req.body.name,
                quantity:req.body.quantity
            });
            //console.log(products);
            res.status(200).json({
                data:products
            });
        }
        catch(err){
            res.status(500).json({
                data:err
            })
        }
 
}

//controller to list products
module.exports.listProduct = async function(req,res){

    try{
        let products = await Product.find({});//find the product
        res.status(200).json({
            data:products//return the products
        });
    }
    catch(err){
        res.status(500).json({
            data:err
        })
    }

}

module.exports.deleteProduct = async function(req,res){
    let id = req.params.id;//get the ide from params
    if(id==undefined){//handle proper routes
        req.status(401).json({
            data:"Id or quantity not found"
        })
    }
    try{
        let product = await Product.findById(id);
        //console.log(products);
        product.remove();
        res.status(200).json({
            data:{
                message:"product deleted"
            }
            
        });
    }
    catch(err){
        res.status(500).json({
            data:err
        })
    }

}

module.exports.updateProduct = async function(req,res){
    let id = req.params.id;//get the id from params
    let number = req.query.number;//get the number from query

    if(id==undefined || number==undefined){//handle proper routes
        req.status(401).json({
            data:"Id or quantity not found"
        })
    }
    try{
        //let product = await Product.findOneAndUpdate({_id:id},{$set:{quantity:quantity+number},new:true});
        let product = await Product.findById(id);//find the Id
        product.quantity = product.quantity+eval(number);//update the document
        product.save();//save the document
        res.status(200).json({
            data : product,
            message:"product updated"
        });
    }
    catch(err){
        res.status(500).json({
            data:err
        })
    }

}