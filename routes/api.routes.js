var express = require('express');
var router = express.Router();
var api = require("../controllers/ApiController");
const path = require('path');






router.post('/login', function(req, res){
	api.login(req, res);
});

router.get('/getSector', function(req, res){
	console.log('router')
	api.getSector(req, res);
});

router.post('/getProducts', function(req, res){
	api.getProducts(req, res);
});


router.get('/getState', function(req, res){
	api.getState(req, res);
});

router.post('/getDistrict', function(req, res){
	api.getDistrict(req, res);
});

router.post('/getPincode', function(req, res){
	api.getPincode(req, res);
});


router.get('/getcountry', function(req, res){
	api.getcountry(req, res);
});
router.post('/getstatebycountry', function(req, res){
	api.getstatebycountry(req, res);
});

router.post('/applicant', function(req, res){
	api.addApplicant(req, res);
});

router.post('/addApplicantwithEOI', function(req, res){
	api.addApplicantwithEOI(req, res);
});

router.get('/viewApplicant', function(req, res){
	api.viewApplicant(req, res);
});

router.get('/viewCoApplicant', function(req, res){
	api.viewCoApplicant(req, res);
});

router.post('/viewApplicantByEmail', function(req, res){
	api.viewApplicantByEmail(req, res);
});

router.get('/editApplicant/:id', function(req, res){
	api.editApplicant(req, res);
});

router.get('/editApplicantAdmin/:id', function(req, res){
	api.editApplicantAdmin(req, res);
});

router.get('/editApplicantbyemail/:email', function(req, res){
	api.editApplicantbyemail(req, res);
});
router.post('/GetAdminApplicantSingleEmail/:id', function(req, res){
	api.GetAdminApplicantSingleEmail(req, res);
});

router.post('/updateapplicant/:id', function(req, res){
	api.updateApplicant(req, res);
});

router.post('/updateApplicantWithEOI/:id', function(req, res){
	api.updateApplicantWithEOI(req, res);
});

router.post('/updateAdminApplicantSingleEmail/:id',  function(req, res){
	api.updateAdminApplicantSingleEmail(req, res);
});

router.post('/assessors', function(req, res){
	api.addAssessors(req, res);
});

router.post('/addAssessorsWithEOI', function(req, res){
	api.addAssessorsWithEOI(req, res);
});


router.get('/viewAssessors', function(req, res){
	api.viewAssessors(req, res);
});

router.get('/editAssessors/:id', function(req, res){
	api.editAssessors(req, res);
});

router.get('/editAssessorsAdmin/:id', function(req, res){
	api.editAssessorsAdmin(req, res);
});


router.post('/updateAssessors/:id', function(req, res){
	api.updateAssessors(req, res);
});

router.post('/updateAssessorsWithEOI/:id', function(req, res){
	api.updateAssessorsWithEOI(req, res);
});

router.get('/createPassword/:id/:type', function(req, res){
	api.createPassword(req, res);
});

router.post('/PasswordSave/:id/:type', function(req, res){
	api.PasswordSave(req, res);
});

router.post('/calibrator', function(req, res){
	api.addCalibrator(req, res);
});

router.post('/addCalibratorWithEOI', function(req, res){
	api.addCalibratorWithEOI(req, res);
});

router.get('/viewCalibrator', function(req, res){
	api.viewCalibrator(req, res);
});

router.get('/editCalibrator/:id', function(req, res){
	api.editCalibrator(req, res);
});

router.get('/editCalibratorsAdmin/:id', function(req, res){
	api.editCalibratorsAdmin(req, res);
});

router.post('/updateCalibrator/:id', function(req, res){
	api.updateCalibrator(req, res);
});

router.post('/updateCalibratorWithEOI/:id', function(req, res){
	api.updateCalibratorWithEOI(req, res);
});

router.post('/addQuestionnaire', function(req, res){
	api.addQuestionnaire(req, res);
});

router.get('/viewQuestionnaire', function(req, res){
	api.viewQuestionnaire(req, res);
});

router.get('/addSectionId/:id', function(req, res){
	api.addSectionId(req, res);
});


router.post('/addSection', function(req, res){
	api.addSection(req, res);
});

router.post('/addQuestion', function(req, res){
	api.addQuestion(req, res);
});

router.post('/addSubSection', function(req, res){
	api.addSubSection(req, res);
});
 
router.get('/viewAllSection', function(req, res){
	api.viewAllSection(req, res);
});

router.post('/getSectionWithId', function(req, res){
	api.getSectionWithId(req, res);
});

router.get('/applicantDelete/:id', function(req, res){
	api.applicantDelete(req, res);
});

router.post('/applicantReSendEOI/:id', function(req, res){
	api.applicantReSendEOI(req, res);
});

router.post('/assessorReSendEOI/:id', function(req, res){
	api.assessorReSendEOI(req, res);
});

router.post('/calibratorReSendEOI/:id', function(req, res){
	api.calibratorReSendEOI(req, res);
});

router.post('/signUp', function(req, res){
	api.signUp(req, res);
});

router.get('/accountActive/:id', function(req, res){
	api.accountActive(req, res);
});


router.post('/ChangePassword/:id', function(req, res){
	api.ChangePassword(req, res);
});

router.get('/accountActiveDetails/:id', function(req, res){
	api.accountActiveDetails(req, res);
});

router.post('/resetPassword', function(req, res){
	api.resetPassword(req, res);
});

router.post('/resetPasswordSave/:id', function(req, res){
	api.resetPasswordSave(req, res);
});

//******************Co Applicant************************//

router.post('/coApplicantSave', function(req, res){
	api.coapplicantsave(req, res);
});

router.get('/coApplicantlist/:id', function(req, res){
	api.coapplicantlist(req, res);
});

router.post('/updateByIdCoApplicant/:id', function(req, res){
	api.updateByIdCoApplicant(req, res);
});

router.get('/getByIdCoApplicant/:id', function(req, res){
	api.getByIdCoApplicant(req, res);
});

router.get('/bulkmail',function(req, res){
	api.bulkmail(req, res);
})

router.get('/sendActivationEmail/:id',function(req, res){
	api.sendActivationEmail(req, res);
})

router.post('/bulkInsertQues',function(req, res){
	api.addQuestion(req, res);
})

router.get('/viewQuestion',function(req, res){
	api.viewQuestion(req, res)
})

router.post('/insertInstruction',function(req, res){
	api.insertInstruction(req, res);
})

router.get('/viewInstruction',function(req, res){
	api.viewInstruction(req, res)
})
router.post('/viewQuestionSec',function(req, res){
	api.viewQuestionSec(req, res);
})
router.post('/viewInstructionByCriteria',function(req, res){
	api.viewInstructionByCriteria(req, res);
})
router.post('/viewQuestionByCriteria',function(req, res){
	api.viewQuestionByCriteria(req, res);
})

router.post('/ViewAssessment',function(req, res){
	api.ViewAssessment(req, res);
})

router.post('/addAssessment',function(req, res){
	api.addAssessment(req, res);
})

router.post('/ViewInst',function(req, res){
	api.ViewInst(req, res);
})

router.post('/addUserInstruction',function(req, res){
	api.addUserInstruction(req, res);
})

router.post('/viewFinalAssessment',function(req, res){
	api.viewFinalAssessment(req, res);
})

router.post('/saveFinalAssessment',function(req, res){
	api.saveFinalAssessment(req, res);
})

///-------------- Allocation----------------------///

router.get('/viewApplicantLOISubmitted',function(req, res){
	api.viewApplicantLOISubmitted(req, res);
})

router.post('/viewAssessorAsPerSector',function(req, res){
	api.viewAssessorAsPerSector(req, res);
})

router.post('/SaveAllocation',function(req, res){
	api.saveallocation(req, res);
})

router.get('/list-allocation',function(req, res){
	api.list_allocation(req, res);
})
router.get('/allocationByAssessor/:id',function(req, res){
	api.list_allocation_by_assessor(req, res);
})

router.get('/allocationByAssessorOne/:id',function(req, res){
	api.list_allocation_by_assessor_one(req, res);
})

router.get('/checkAllocation/:id',function(req, res){
	api.checkAllocation(req, res);
})

router.get('/dashboardAdmin',function(req, res){
	api.dashboardAdmin(req, res);
})

router.post('/updateStatusAllocationByAssessor/:id',function(req, res){
	api.updateStatusAllocationByAssessor(req, res);
})

router.post('/updateAssessorScore/:id',function(req, res){
	api.updateAssessorScore(req, res);
})

router.post('/updateSectionInAllocation/:id',function(req, res){
	api.updateSectionInAllocation(req, res);
})

router.post('/updatePeriodInAllocation/:id',function(req, res){
	api.updatePeriodInAllocation(req, res);
})


router.get('/viewCoApplicant', function(req, res){
	api.viewCoApplicant(req, res);
});

router.post('/getAllocated', function(req, res){
	api.getAllocated(req, res);
});

router.post('/getScore', function(req, res){
	api.getScore(req, res);
});

router.post('/addScore', function(req, res){
	api.addScore(req, res);
});

router.get('/editAllocation/:id', function(req, res){
	api.editAllocation(req, res);
});

router.post('/updateAllocation',function(req, res){
	api.updateAllocation(req, res)
})

router.post('/sendMail',function(req, res){
	api.send2ndcommunicationmail(req, res)
})

router.post('/updateMailStatus',function(req, res){
	api.updateMailStatus(req, res)
})

router.post('/saveSummary',function(req, res){
	api.saveExecutiveSummary(req, res)
})

router.get('/getSummary/:id',function(req, res){
	api.getExecutiveSummary(req, res)
})


router.post('/getSubSection',function(req, res){
	api.getSubSection(req, res)
})

router.post('/getAllocationAssessor',function(req, res){
	api.getAllocationAssessor(req, res)
})

router.post('/getAssessment',function(req, res){
	api.getAssessment(req, res)
})

router.post('/getAssessmentScore',function(req, res){
	api.getAssessmentScore(req, res)
})

router.post('/addConsensusScore',function(req, res){
	api.addConsensusScore(req, res)
})

router.post('/getConsensusScore',function(req, res){
	api.getConsensusScore(req, res)
})

router.post('/sectionGroupbyCriteria',function(req, res){
	api.sectionGroupbyCriteria(req, res)
})

router.post('/questionGroupbyCriteria',function(req, res){
	api.questionGroupbyCriteria(req, res)
})

router.post('/saveHighScore',function(req, res){
	api.saveHighScore(req, res)
})

router.post('/getHighScore',function(req, res){
	api.getHighScore(req, res)
})
module.exports = router; 