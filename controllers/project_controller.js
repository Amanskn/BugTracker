const Project=require('../models/project');


module.exports.projectHome=function(req,res){
    return res.render('project_create',{
        title:'Project Creation Page'
    });
}

module.exports.createProject = async function(req,res){

    let project = await Project.findOne({name:req.body.name});
    // console.log("Previous project",project);
    if(!project){
        let project = await Project.create(req.body);
        // return res.status(200).json({
        //     message:"New Project created",
        //     project:project
        // })
        return res.redirect('/');

    }else{
        return res.status(200).json({
            message:'A post with same name already exists'
        })

    }


}


module.exports.deleteProject = async function(req,res){
    let id=req.params.id;
    await Project.findByIdAndDelete(id)
        
    return res.redirect('back');
    
}