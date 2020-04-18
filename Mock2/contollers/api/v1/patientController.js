const Patient = require('../../../models/patient');


module.exports.homePage = function(req,res){//function to display the register patient (optional use)
    res.render('patient.ejs',{})
}

module.exports.registerPatient = async function (req,res){
    try{
        let patient = await Patient.findOne({number:req.body.number});//check if patient is already present
        //console.log(patient);
        if(patient!=null){ //if present send the patient
            return res.json(200,{
                data:patient,
                message:"Patient already registered"
            });
        }
        else{//else create new patient
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