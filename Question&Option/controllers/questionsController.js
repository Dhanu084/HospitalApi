const Question = require('../models/question');
const Option = require('../models/option');

//module to create question
module.exports.create = async function(req,res){
    console.log(req.body);
    try{
        await Question.create(req.body);

    return res.json(200,{
        data:{
            message:"Question created"
        }
    })
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            data:""
        })
    }
}

//module to create Option
module.exports.createOption = async function(req,res){
    console.log(req.params.id);
    console.log(req.body);
    try{
        let option = await Option.create({
            Question:req.params.id,
            text:req.body.text,
            votes:req.body.votes,
            link_to_vote:req.body.link_to_vote
        });
        console.log("Option",option);
        let question = await Question.findById(req.params.id);
        question.options.push(option);
        question.save();
        console.log(question);
    return res.json(200,{
        data:{
            message:"Option created"
        }
    });
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            data:""
        })
    };
}

//module to delete question
module.exports.deleteQuestion = async function (req,res){
    let id = req.params.id;
    try{
        let question =await  Question.findById(id);
        question.remove();
        Question.save();
        res.json(200,{
            data:"Question Deleted"
        })
    }
    catch(err){
        res.json(500,{
            data:err
        })
    }
}

//module to delete option
module.exports.deleteOption = async function (req,res){
    let id = req.params.id;
    try{
        let option = await Option.findByIdAndDelete(id);
        if(option.votes>100){//optional functionality added
            res.json(200,{
                data:"vote count is higher"
            })
        }
        let questionId = await Question.findById(option.Question);
        let question= await Question.findByIdAndUpdate(questionId, { $pull: {options: req.params.id}});

        res.json(200,{
            data:"Question Deleted"
        })
    }
    catch(err){
        res.json(500,{
            data:err
        })
    }
}

//module to list Questions
module.exports.listQuestions = async function(req,res){
    let id = req.params.id;
    try{
        let question = await Question.findById(id);
        res.json(200,{
            data:question
        })
    }
    catch(err){
        res.json(500,{
            data:err
        })
    }
    
}

//module to add votes
module.exports.addVote = async function(req,res){
    let id = req.params.id;
    try{
        let option = await Option.findById(id);
        option.votes+=1;
        option.save();
        let questionId = await Question.findById(option.Question);
        let question= await Question.findByIdAndUpdate(questionId, { $pull: {options: id}});
        
        res.json(200,{
            data:"Vote added"
        })
    }
    catch(err){
        res.json(500,{
            data:err
        })
    }
}