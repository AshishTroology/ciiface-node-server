var http = require('http');
const jwt = require('jsonwebtoken');
var Applicant=require('../models/ApplicantModel.model');
var CoApplicant=require('../models/CoApplicantModel.model');
var Assessors=require('../models/AssessorsModel.model');
var Calibrator=require('../models/CalibratorModel.model');
var LocationModel=require('../models/locationModel.model');
var CountryModel=require('../models/Country.model');
var SectorModel=require('../models/SectorModel.model');
var ProductModel=require('../models/Product_model.js');

var QuestionnaireModel=require('../models/QuestionnaireModel.model');
var SectionModel=require('../models/SectionModel.model');
var SubSectionModel=require('../models/SubSectionModel.model');
var QuestionModel=require('../models/QuestionModel.model');
var FassessmentModel=require('../models/FinalAssessment.model');
const nodemailer = require("nodemailer");

var QuesModel=require('../models/question.model');
var InstructionModel=require('../models/Instruction.model');
var assessment_model=require('../models/Assessment.model');
var Userinst_model=require('../models/UserInstruction.model');
var Allocation_model=require('../models/Allocation.model');
var Allocationlist_model=require('../models/Allocation_list.model');



const path = require('path');



var Auth=require('../models/Auth_model.js');
const crypto = require ("crypto");
const bcrypt = require('bcryptjs');

let hashPassword=(password)=>{
    let salt = bcrypt.genSaltSync(10);
    var hashedPassword =bcrypt.hashSync(password, salt)
    return hashedPassword
}

const { isMatch } = require('lodash');

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;


let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';




var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = "YOUR API KEY"
var api = new SibApiV3Sdk.AccountApi()
api.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});


function sendMail(email,subject,htmlContent){
     var mailTransporter  = nodemailer.createTransport({
            // host: "smtp.mailgun.org",
            // port: 587,
            // secure: false,
            // auth: {
            //   user: 'postmaster@evalue8.info',
            //   pass: 'a41523a910247f8e487509664dcf5d5e-1831c31e-64b5fe09', // generated ethereal password
            // },
            service: 'gmail',
              auth: {
                user: 'ciifoodsafety@gmail.com',
                pass: 'ciiFood#2022'
              }
          });
          var mailDetails = {
            from: 'postmaster@evalue8.info',
            to: email+',fs.award@cii.in,radha.joshi@cii.in,anju.bist@cii.in,support@troology.com,harsh@troology.com,support@fleetware.io,amit@aspireindia.com',
            subject: subject,
            html: htmlContent
        }
        mailTransporter.sendMail(mailDetails, function (err, info) {
            if (err) {
                console.log(err);
              }
              else
               {
                console.log(info)
              }
          });
}




const api2Controller = {};

api2Controller.assesorCountData = function (req,res) {

}



module.exports = api2Controller;