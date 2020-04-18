const Report = require('../models/report');
const Patient = require('../models/patient');

module.exports.createReport = async function(req,res){
    //console.log(req.body)
    try{
        let patient = await Patient.findById(req.params.id);
        let report = await Report.create(req.body);
        await patient.report.push(report);
        await patient.save();
        //console.log(patient);
        return res.json(200,{
            data:report
        })
    }
    catch(err){

    }
}

module.exports.getReports = async function(req,res){
    try{
        let patient = await Patient.findById(req.params.id);
        let reports=[];
        for(let id of patient.report){
            let report = await Report.findById(id);
            reports.push(report);
        }
        return res.json(200,{
            data:reports
        })
    }
    catch(err){
        return res.json(500,{
            data:err
        })
    }
}

module.exports.filterReport = async function(req,res){
    try{
        let patients = await Patient.find();
        //console.log(patients);
        let reports=[];
        for(patient of patients){
            //console.log(patient)
           for(report of patient.report){
               let r = await Report.findById(report);
               if(r.status == req.params.status){
                   reports.push({
                       "patient name":patient.name,
                       "patient number":patient.number,
                       "report" : r
                   })
               }
           }
            
        }
        
        return res.json(200,{
            data:reports
        })
    }
    catch(err){
        return res.json(500,{
            data:err
        })
    }
}