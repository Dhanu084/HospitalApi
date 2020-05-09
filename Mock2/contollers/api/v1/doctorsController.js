const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.addDoctor =  function(req,res){//function to add doctor
    //console.log(req.body);
    //try{
        let doctor = Doctor.create(req.body,function(err,doctor){
            if(err){
                if(doctor==null) {
                    return res.status(500).send({message:"Internal Server Error"});
                }
            }
            return res.status(200).send({message:doctor});
        });
        
        
    // }
    // catch(err){
    //     console.log(err);
    //     res.status(500).send(err);
    // }
}

module.exports.homePage = function(req,res){//function to display the register page (optional use)
    res.render('doctor.ejs',{})
}

module.exports.login = async function(req,res){
    //console.log(req.body);
    try{
        let user = await Doctor.findById(req.body._id);//find the user
        //console.log(user);
        if(!user){
            return res.json(422,{message:"Invalid username/password"})
        }
        if(user && user.password!==req.body.password || user.name!==req.body.name){
            return res.json(422,{message:"Invalid username/password"})
        }
        return res.status(200).send({
            message:'Sign in successful',
            token:jwt.sign(user.toJSON(),'hospital',{expiresIn:'10000'})
        })
        // data:{
        //     token : jwt.sign(user.toJSON(),'hospital',{expiresIn:'10000'}),//create token and send in JSON
        // }}
            // message:'success'
        //})
    }
    catch(err){
        console.log(err);
        res.json(500,{
            data:err
        })
    }
}

module.exports.log = function(req,res){//function to display the login page (optional use)
    res.render('doctor_login.ejs');
}