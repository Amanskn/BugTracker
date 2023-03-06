const Issue=require('../models/issue');
const Project=require('../models/project');


module.exports.issueHome= async function(req,res){
    let projectId=req.params.id;
    let project= await Project.findById(projectId,{ name: 1, _id: 1 });
    
    

    return res.render('issue_create',{
        title:'Issue Creation Page',
        project:project
    });
}

module.exports.createIssue = async function(req,res){

    let issue = await Issue.findOne({title:req.body.title});
    
    if(!issue){
        let issue = await Issue.create(req.body);
        // return res.redirect('/');
        // return res.status(200).json({
        //     message:"Issue created",
        //     issue:issue
        // });
        return res.redirect(`/project/details/?id=${issue.project}`);

    }else{
        return res.status(200).json({
            message:'An issue with same title already exists'
        })

    }


}


module.exports.deleteIssue = async function(req,res){
    let id=req.params.id;
    await Issue.findByIdAndDelete(id)
        
    return res.redirect('back');
    
}