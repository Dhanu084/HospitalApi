const Patient = require('../models/patient');


module.exports.homePage = function(req,res){
    res.render('patient.ejs',{})
}
module.exports.registerPatient = async function (req,res){
    try{
        let patient = await Patient.findOne({number:req.body.number});
        console.log(patient);
        if(patient!=null){
            return res.json(200,{
                data:patient,
                message:"Patient already registered"
            });
        }
        else{
            patient = await Patient.create(req.body);
            return res.json(200,{
                data:patient
            })
        }
    }
    catch(err){
        if(err){
            return res.json(500,{
                data:err
            })
        }
    }
}