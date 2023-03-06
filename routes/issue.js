const express=require('express');
const router=express.Router();
const issueController=require('../controllers/issue_controller');

router.get('/create/:id',issueController.issueHome);
router.post('/submit',issueController.createIssue);
router.get('/delete/:id',issueController.deleteIssue);


module.exports=router;