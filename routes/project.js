const express=require('express');
const router=express.Router();
const projectController=require('../controllers/project_controller');

router.get('/create',projectController.projectHome);
router.get('/details',projectController.projectDetails);
router.post('/submit',projectController.createProject);
router.get('/delete/:id',projectController.deleteProject);


module.exports=router;