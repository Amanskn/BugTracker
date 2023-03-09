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


module.exports.filterIssue = async function(req,res){
    console.log("Inside controller");
    try{
        let id = req.query.id;
        let project = await Project.findById(id);
        console.log("The project name is ",project.name);
        console.log("labels selected are",req.body.labels);
        if(req.body.labels){
            let issues = await Issue.find({label:{$in: req.body.labels}});
            return res.render('project_details',{
                title:'ProjectDetails',
                project:project,
                issues:issues
            });
        }
        else if(req.body.authors){
            let issues = await Issue.find({author:{$in: req.body.authors}});
            return res.render('project_details',{
                title:'ProjectDetails',
                project:project,
                issues:issues
            });
        }
        else if(req.body.title){
            let issues = await Issue.find({
                $or: [
                    { title: req.body.title },
                    { description: req.body.title }
                ]
            });
            if(issues.length>0){
                return res.render('project_details',{
                    title:'ProjectDetails',
                    project:project,
                    issues:issues
                });

            }
            return res.status(200).json({
                message:`Sorry no issue with the specified title/description = ${req.body.title} is found:)`
            });
            
        }
        else{
            return res.redirect(`/project/details/?id=${project._id}`);    
            // return res.status(200).json({
            //     message:"no input"
            // })
        }
    }catch(err){
        console.log("Inside catch ",err);
        return res.status(200).json({
            message:'Error',
            error:err
        })
    }

    


    
}