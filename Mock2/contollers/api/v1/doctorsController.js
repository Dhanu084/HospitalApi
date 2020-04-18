const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.addDoctor = async function(req,res){//function to add doctor
    try{
        let doctor = await Doctor.create(req.body);
        return res.json(200,{
            data: doctor
        })
    }
    catch(err){
        res.json(500,{
            data : err
        })
    }
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
            return json(422,{
                message:'Invalid username/password'
            })
        }

        return res.json(200,{
            message:'Sign in successful',
            data:{
                token : jwt.sign(user.toJSON(),'hospital',{expiresIn:'10000'}),//create token and send in JSON
            },
            message:'success'
        })
    }
    catch(err){
        res.json(500,{
            data:err
        })
    }
}

module.exports.log = function(req,res){//function to display the login page (optional use)
    res.render('doctor_login.ejs');
}