const Report = require('../../../models/report');
const Patient = require('../../../models/patient');

module.exports.createReport = async function(req,res){//function to create Report
    //console.log(req.body)
    try{
        let patient = await Patient.findById(req.params.id);//find the patient
        let report = await Report.create(req.body);//create the report
        await patient.report.push(report);//push it to the reports array of the patient
        await patient.save();
        //console.log(patient);
        return res.json(200,{
            data:report
        })
    }
    catch(err){

    }
}

module.exports.getReports = async function(req,res){//function to get reports
    try{
        let patient = await Patient.findById(req.params.id);//find the patient
        let reports=[];//array variable to store the records of the patient
        for(let id of patient.report){
            let report = await Report.findById(id).sort('createdAt');//sort the records according to the time created
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
        let patients = await Patient.find();//find the patients
        //console.log(patients);
        let reports=[];
        for(patient of patients){
            //console.log(patient)
           for(report of patient.report){
               let r = await Report.findById(report);
               if(r.status == req.params.status){//for every record of every patient if the record status is same as per req.body push it in the array
                   reports.push({//pushing it as object
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