const Project=require('../models/project');



module.exports.home= async function(req,res){
    let Projects=await Project.find();
    
    // console.log(Projects);

    return res.render('home',{
        title:"HomePage",
        all_projects:Projects
    })
}