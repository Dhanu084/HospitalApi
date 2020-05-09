const Report = require('../../../models/report');
const Patient = require('../../../models/patient');

module.exports.createReport = async function(req,res){//function to create Report
    //console.log(req.body)
    try{
        let patient = await Patient.findById(req.params.id);//find the patient
        let report = await Report.create(req.body);//create the report
        await patient.report.push(report);//push it to the reports array of the patient
        await patient.save();
        console.log(report);
        return res.status(200).send({data:report});
    }
    catch(err){
        return res.status(500).send({message:err});
    }
}

module.exports.getReports = async function(req,res){//function to get reports
    try{
        let patient = await Patient.findById(req.params.id);//find the patient
        //console.log(patient);
        await Patient.findById(req.params.id).populate('reports').exec(function(err,reports){
            if(err){
                res.status(500).send({message:err});
            }
            console.log(reports);
            res.status(200).send({data:reports})
        })
            
        // for(let id of patient.report){
        //     let report = await Report.findById(id).sort('createdAt');//sort the records according to the time created
        //     reports.push(report);
        // }
        // return res.json(200,{
        //     data:reports
        // })
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            data:err
        })
    }
}

module.exports.filterReport = async function(req,res){
    //console.log(req.params.status);
    try{
        let patients = await Patient.find();
        reports=[];
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
        if(reports.length==0){
            return res.status(200).send({message:"No such reports"});
        }
        console.log(reports);
        return res.json(200,{
            data:reports
        })
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            data:err
        })
    }
}