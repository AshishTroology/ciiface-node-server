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
var ExecutiveSummaryModel=require('../models/ExecutiveData.model');
var Score_model=require('../models/Score.model');
var ConsensusScore_model=require('../models/ConsensusScore.model');
var HighScore_model=require('../models/Highest_score.model');




const path = require('path');
const multer  = require('multer');
// const fileStroage = multer.diskStorage({
//  destination: (req, file, cb)=>{
//    cb(null, "public/uploadForm");
//  },
//  filename: (req, file, cb) =>{
//      console.log(file);
//      cb(null, Date.now() + path.extname(file.originalname))
//  }
//   });
// const upload = multer({ storage:fileStroage });


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
            // service: 'Gmail',
            //   auth: {
            //     user: 'ciifoodsafety@gmail.com',
            //     pass:'bfcsiqemkrhfjkkw'
            //   },
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
              user: 'fs.award@cii.in',
              pass: 'Virtual@2020', // generated ethereal password
            },
          });
          var mailDetails = {
            from: 'fs.award@cii.in',
            to: email+',radha.joshi@cii.in,anju.bist@cii.in,tarun.gupta@cii.in,joydeep.neogy@gmail.com',
            // to: 'ashish.maurya@troology.com,support@troology.com',
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


function sendMailwithAttachment(email,subject,htmlContent){
     var mailTransporter  = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
              user: 'fs.award@cii.in',
              pass: 'Virtual@2020', // generated ethereal password
            },
          });
          var mailDetails = {
            from: 'fs.award@cii.in',
            // to: email,
            to: email+',radha.joshi@cii.in,anju.bist@cii.in,tarun.gupta@cii.in,joydeep.neogy@gmail.com',
            // to:'support@troology.com',
            subject: subject,
            html: htmlContent,
            attachments: [
                {
                    path: 'https://award.face-cii.in/assets/pdf/Key_Steps_for_Virtual_Site_Visit.pdf'
                },
                {
                    path: 'https://award.face-cii.in/assets/pdf/Roles_&_Responsibilities_VA.pdf'
                },
                {
                    path: 'https://award.face-cii.in/assets/pdf/Sample_Virtual_site_visit_plan.pdf'
                },
            ]
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

function sendMailwithAttachment_comm2(email,subject,htmlContent){
     var mailTransporter  = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
              user: 'fs.award@cii.in',
              pass: 'Virtual@2020', // generated ethereal password
            },
          });
          var mailDetails = {
            from: 'fs.award@cii.in',
            to: email+',radha.joshi@cii.in,anju.bist@cii.in,tarun.gupta@cii.in,joydeep.neogy@gmail.com',
            // to:email,
            subject: subject,
            html: htmlContent,
            attachments: [
                {
                    path: 'https://award.face-cii.in/assets/pdf/Confidentiality_letter.doc'
                },
                {
                    path: 'https://award.face-cii.in/assets/pdf/Feedback_Form.doc'
                },
                {
                    path: 'https://award.face-cii.in/assets/pdf/Key_Information.docx'
                },
                {
                    path: 'https://award.face-cii.in/assets/pdf/Sample_letter.docx'
                },
            ]
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

function sendMailwithAttachment_comm3(email,subject,htmlContent){
     var mailTransporter  = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
              user: 'fs.award@cii.in',
              pass: 'Virtual@2020', // generated ethereal password
            },
          });
          var mailDetails = {
            from: 'fs.award@cii.in',
            to: email+',radha.joshi@cii.in,anju.bist@cii.in,tarun.gupta@cii.in,joydeep.neogy@gmail.com',
            // to:email,
            subject: subject,
            html: htmlContent,
            attachments: [
                {
                    path: 'https://award.face-cii.in/assets/pdf/Opening_Meeting_ppt_2022.pptx'
                },
            ]
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

function sendMailwithAttachment_comm4(email,subject,htmlContent){
     var mailTransporter  = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
              user: 'fs.award@cii.in',
              pass: 'Virtual@2020', // generated ethereal password
            },
          });
          var mailDetails = {
            from: 'fs.award@cii.in',
            to: email+',radha.joshi@cii.in,anju.bist@cii.in,tarun.gupta@cii.in,joydeep.neogy@gmail.com',
            // to:email,
            subject: subject,
            html: htmlContent,
            attachments: [
                {
                    path: 'https://award.face-cii.in/assets/pdf/Key_Virtual_Site_Visit.docx'
                },
            ]
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



const apiController = {};





/*---------------------------apiController controller-----------------------------*/
apiController.login = function (req,res) {
   
    Auth.findOne({email:req.body.email}, (err, user)=>{
        if(err){
           
            res.status(200).json({message:'server errors'});
        }else if(user==undefined){
            res.status(200).json({message:'User Not Found!',status:404});
        }else{
            bcrypt.compare(req.body.password, user.password,(err, isMatch)=>{
                if(err){
                    res.status(200).json({message:'server error'});
                }else if(isMatch===true){

                    res.status(200).json({results:user,message:'login successfully',status:200});
                }else{
                    res.status(200).json({message:'incorrect credentials',status:401});
                }
            })
        }
    })
    
}

apiController.getSector = function (req,res) {
   
    ProductModel.distinct('Sector').exec(function(err,result){
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            res.json({ result});
        }
    })
}

apiController.getProducts = function(req,res)
{
    ProductModel.find({ Sector: req.body.sector })
    .distinct("Product")
    .exec(function (err, result) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json({ result});
      }
    });
}

apiController.getState = function (req,res) {
   
    LocationModel.distinct('statename').exec(function(err,result){
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            res.json({ result, msg: "view datadfd" });
        }
        
    })
  
   
    
}

apiController.getDistrict = function(req,res)
    {
        LocationModel.find({ statename: req.body.statename })
        .distinct("Districtname")
        .exec(function (err, result) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            res.json({ result, msg: "view datadfd" });
          }
        });
    }

apiController.getPincode = function(req,res)
    {
        LocationModel.find({ pincode: req.body.pincode })
        .exec(function (err, result) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            res.json({ result, msg: "view datadfd" });
          }
        });
    }

apiController.getcountry = function(req,res)
    {
        CountryModel.find({},{country:1})
        .exec(function (err, result) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            res.json(result);
          }
        });
    }

apiController.getstatebycountry = function(req,res)
{
    CountryModel.find({country:req.body.country},{states:1})
    .exec(function (err, result) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(result);
      }
    });
}


apiController.addApplicant = function (req, res) {

    // res.json(req.body);

    const applicantId= Math.floor(100000 + Math.random() * 900000);
    // console.log(applicantId);
    const token=jwt.sign({id:0},'my_secret_key');
    var applicant = new Applicant({
        "token": token,
        "applicantId": applicantId,
        "unitName": req.body.unitName,
        "criteria":  req.body.criteria, 
        "contactPerson":  req.body.contactPerson, 
        "sector":  req.body.sector, 
        "product":  req.body.product, 

        "titleName":  req.body.titleName, 
        "firstName":  req.body.firstName, 
        "lastName":  req.body.lastName, 
        "phoneNo":  req.body.phoneNo, 
        "mobileNo":  req.body.mobileNo, 
        "email":  req.body.email, 
        "secondaryEmail":  req.body.secondaryEmail, 

        "addressLine1":  req.body.addressLine1, 
        "addressLine2":  req.body.addressLine2, 
        "zipCode":  req.body.zipCode, 
        "country":  req.body.country, 
        "state":  req.body.state, 
        "city":  req.body.city, 

    });
    console.log(applicant);
 
        applicant.save(function (err, result) {
            if (err) {
                console.log(err)
            }else{
                res.status(200).json({message:"Your  User Details has been saved successfully",applicant:applicant})      
            }
        });
}

apiController.addApplicantwithEOI = function (req, res) {
    const applicantId= Math.floor(100000 + Math.random() * 900000);
    // console.log(applicantId);
    const token=jwt.sign({id:0},'my_secret_key');
    var applicant = new Applicant({
        "invite": true,
        "token": token,
        "applicantId": applicantId,
        "unitName": req.body.unitName,
        "criteria":  req.body.criteria, 
        "contactPerson":  req.body.contactPerson, 
        "sector":  req.body.sector, 
        "product":  req.body.product, 

        "titleName":  req.body.titleName, 
        "firstName":  req.body.firstName, 
        "lastName":  req.body.lastName, 
        "phoneNo":  req.body.phoneNo, 
        "mobileNo":  req.body.mobileNo, 
        "email":  req.body.email, 
        "secondaryEmail":  req.body.secondaryEmail, 

        "addressLine1":  req.body.addressLine1, 
        "addressLine2":  req.body.addressLine2, 
        "zipCode":  req.body.zipCode, 
        "country":  req.body.country, 
        "state":  req.body.state, 
        "city":  req.body.city, 

    });
    console.log(applicant);
 
        applicant.save(function (err, result) {
            if (err) {
                console.log(err)
            }
            else
            {
                let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  '+req.body.firstName+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>We are pleased to inform you that <b>'+req.body.unitName+'</b> has been nominated for the CII Award for Food Safety.</p><p> We request you to kindly accept this invite for nomination and complete your Letter of Intent for CII Award for Food Safety.</p> <p>To activate this account, Please click the following link: </p><a href="https://award.face-cii.in/create-password/'+applicant._id._id+'/applicant " style="padding:5px;background:blue;color:white;text-decoration:none;"> Activate Account </a>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';  
                sendMail(req.body.email,"Activate your CII FACE Applicant Account Now",html);
                res.status(200).json({message:'Email Sent :',applicant:applicant});
                  
            }
        });

 
}

apiController.viewApplicant = function (req, res) {
    var mysort = { created_at: -1 };  
    Applicant.aggregate([
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
        {$lookup:{
              from: 'userinstructions',
              localField: 'email',
              foreignField: 'email',
              as: 'InstructionData'
        }},
        {$lookup:{
              from: 'finalassessments',
              localField: 'email',
              foreignField: 'email',
              as: 'finalassessmentsData'
        }},
        {$lookup:{
              from: 'coapplicants',
              localField: '_id',
              foreignField: 'applicantId',
              as: 'codata'
            }},
        {$match:{sector:{$exists:true,$ne:null}}}
        ]).sort(mysort)
     .then(result=>{
         res.status(200).json({
            applicanData:result
         });
     })
     .catch(err=>{
         console.log(err);
         res.status(500).json({
             error:err
         })
     });
  
}


apiController.viewCoApplicant = function (req, res) {
    var mysort = { created_at: -1 };  
    CoApplicant.aggregate([
        {$lookup:{
              from: 'applicants',
              localField: 'applicantId',
              foreignField: '_id',
              as: 'applicantData'
        }},
        ]).sort(mysort)
     .then(result=>{
         res.status(200).json({
            applicanData:result
         });
     })
     .catch(err=>{
         console.log(err);
         res.status(500).json({
             error:err
         })
     });
  
}


apiController.viewApplicantByEmail = function (req, res) {
    var mysort = { created_at: -1 };  
    Applicant.aggregate([
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
        {$lookup:{
              from: 'userinstructions',
              localField: 'email',
              foreignField: 'email',
              as: 'InstructionData'
        }},
        {$lookup:{
              from: 'finalassessments',
              localField: 'email',
              foreignField: 'email',
              as: 'finalassessmentsData'
        }},
        {$lookup:{
              from: 'allocations',
              localField: '_id',
              foreignField: 'applicant_id',
              as: 'allocationData'
        }},
        {$lookup:{
              from: 'allocationlists',
              localField: 'allocationData._id',
              foreignField: 'allocation_id',
              as: 'allocationlistData'
        }},
        {$match:{'email':req.body.email}}
        
        ])
     .then(result=>{
         res.status(200).json({
            applicanData:result
         });
     })
     .catch(err=>{
         console.log(err);
         res.status(500).json({
             error:err
         })
     });
  
}

apiController.editApplicantbyemail = function (req, res) {
    let email = req.params.email;
    Applicant.findOne({ email: email })
   
  
    .then(result=>{
        res.status(200).json({
        applicanData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}





apiController.editApplicant = function (req, res) {
        let ids = req.params.id;
        Applicant.findOne({ _id: ids })
       
      
        .then(result=>{
            res.status(200).json({
            applicanData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                "error":"Id not matched in records"
            })
    });
}

apiController.GetAdminApplicantSingleEmail = function (req, res) {
    let email = req.body.email;
    // Applicant.findOne({ _id: ids })
    Applicant.aggregate([
        // {$addFields:{'id':{'$toString':'$_id'}}},
        {$match:{email:email}},
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
           
        
        ])
    .then(result=>{
        res.status(200).json({
        applicanData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}


apiController.editApplicantAdmin = function (req, res) {
    let ids = req.params.id;
    // Applicant.findOne({ _id: ids })
    Applicant.aggregate([
        {$addFields:{'id':{'$toString':'$_id'}}},
        {$match:{id:ids}},
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
           
        
        ])
    .then(result=>{
        res.status(200).json({
        applicanData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}

apiController.updateApplicant = function (req, res) {
    let ids = req.params.id;
    var today = new Date();
    req.body.updated_at=today;
    Applicant.findByIdAndUpdate({_id : ids}, {$set:req.body}).then(updateApplicant=>{
        res.status(200).json({"message":" Update Applicant Successfully",updateApplicant})
    }).catch(err=>{
        res.status(500).json({
            "error":"Applicant Update is failed"
        })
    })
}



apiController.updateAdminApplicantSingleEmail = function (req, res) {
    let ids = req.params.id;
    let email = req.body.email;
    var today = new Date();
    req.body.updated_at=today;
    Applicant.findOneAndUpdate({email : email}, {$set:req.body}).then(updateApplicant=>{
        let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  ' +updateApplicant.firstName+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>Thank you for submitting the LoI.</p><p>You may now proceed with submitting the checklist questionnaire from your account. The checklist is divided into multiple sections and every question is required to be answered by selecting the appropriate answer from the selection box.</p>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
        sendMail(req.body.email,"CII Food Safety Award 2022",html)
        res.status(200).json({"message":" Update Applicant Successfully",updateApplicant})
    }).catch(err=>{
        res.status(500).json({
            "error":"Applicant Update is failed"
        })
    })
}


apiController.updateApplicantWithEOI = function (req, res) {
    let ids = req.params.id;
    let status = true;
    var today = new Date();
    req.body.updated_at=today;
    req.body.invite=status
    Applicant.findByIdAndUpdate({_id : ids},{$set:req.body}).then(updateApplicant=>{
            let html= '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  ' +updateApplicant.firstName+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>We are pleased to inform you that <b>'+updateApplicant.unitName+'</b> has been nominated for the CII Award for Food Safety.</p><p> We request you to kindly accept this invite for nomination and complete your Letter of Intent for CII Award for Food Safety.</p> <p>To activate this account, Please click the following link: </p><a href="https://ciiface.evalue8.info/create-password/'+updateApplicant._id+'/applicant" style="padding:5px;background:blue;color:white;text-decoration:none;"> Activate Account </a> </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
            sendMail(req.body.email,'Activate your CII FACE Applicant Account Now',html);
            res.status(200).json({message:'Email Sent :',updateApplicant:updateApplicant});        
        }).catch(err=>{
        res.status(500).json({
            "error":"Email all ready exist"
        })
    })
}


apiController.addAssessors = function (req, res) {
    var assessors = new Assessors(req.body);
   try{
    assessors.save()
       res.status(200).json({"message":" Create Assessors Successfully",assessors})
   }
   catch{
    res.status(500).json({
        "message":"Create Assessors is failed!"
     })
   }
}

apiController.addAssessorsWithEOI = function (req, res) {
    const assessorsId= Math.floor(100000 + Math.random() * 900000);
    console.log(assessorsId);
    const token=jwt.sign({id:0},'my_secret_key');
    var assessors = new Assessors({
        "token": token,
        "invite": true,
        "assessorsId": assessorsId,
        "zone": req.body.zone,
        "batch":  req.body.batch, 
        "designation":  req.body.designation, 
        "presentCo":  req.body.presentCo, 
        "pastCo":  req.body.pastCo, 
        "fsmsCertificate":  req.body.fsmsCertificate, 
        "exposure":  req.body.exposure, 

        "title":  req.body.title, 
        "firstName":  req.body.firstName, 
        "lastName":  req.body.lastName, 
        "phone":  req.body.phone, 
        "email":  req.body.email, 
        "education":  req.body.education, 
        "year":  req.body.year, 
        "skill":  req.body.skill, 
        "domain":  req.body.domain, 

        "addressLine1":  req.body.addressLine1, 
        "addressLine2":  req.body.addressLine2, 
        "zipCode":  req.body.zipCode, 
        "country":  req.body.country, 
        "state":  req.body.state, 
        "city":  req.body.city, 

    });
   try{
    assessors.save()    
    let html= '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  '+req.body.firstName +' ,</b></span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;">We are pleased to inform you that you have been nominated for the assessment of Applicants for CII Award for Food Safety. We request you to kindly accept this invite and complete your information for Applicant’s assessment for CII Award for Food Safety. https://ciiface.evalue8.info/create-password/'+assessors._id+'/assessor </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;">  <td style="padding:0;Margin:0px;border-bottom:1px solid #EEEEEE;background:none;height:1px;width:100%;margin:0px;"></td>  </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:24px;color:#666666;"> <a href="mailto:info@fpomanaktool.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#333333;"></a></p></td>  </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>  </td> </tr>  </table>  </div> </body></html>';
    sendMail(req.body.email,"Assessors password Generate",html);
    res.status(200).json({message:'Email Sent :',assessors:assessors});
   }
   catch{
    res.status(500).json({
        "message":"Create Assessors is failed!"
     })
   }
}

apiController.viewAssessors = function (req, res) {
    var mysort = { created_at: -1 };  
    Assessors.aggregate([
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
        
        ]).sort(mysort)
    .then(result=>{
        res.status(200).json({
           applicanData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
 
}

apiController.editAssessors = function (req, res) {
    let ids = req.params.id;
    Assessors.findOne({ _id: ids })
    .then(result=>{
        res.status(200).json({
        applicanData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}

apiController.editAssessorsAdmin = function (req, res) {
    let ids = req.params.id;
    // Applicant.findOne({ _id: ids })
    Assessors.aggregate([
        {$addFields:{'id':{'$toString':'$_id'}}},
        {$match:{id:ids}},
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
           
        
        ])
    .then(result=>{
        res.status(200).json({
        applicanData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}

apiController.updateAssessors = function (req, res) {
    let ids = req.params.id;
    var today = new Date();
    req.body.updated_at=today;
    Assessors.findByIdAndUpdate({_id : ids},{$set:req.body}).then(updateApplicant=>{
        res.status(200).json({"message":" Update Assessors Successfully",updateApplicant})
    }).catch(err=>{
        res.status(500).json({
            "error":"Assessors Update is failed"
        })
    })
}

apiController.updateAssessorsWithEOI = function (req, res) {
    let ids = req.params.id;
    let status = true;
    var today = new Date();
    req.body.updated_at=today;
    req.body.invite=status;
    Assessors.findByIdAndUpdate({_id : ids},{$set:req.body}).then(updateApplicant=>{
        let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  ' +updateApplicant.firstName+' ,</b></span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;">We are pleased to inform you that you have been nominated for the assessment of Applicants for CII Award for Food Safety. We request you to kindly accept this invite and complete your information for Applicant’s assessment for CII Award for Food Safety. https://ciiface.evalue8.info/create-password/'+updateApplicant._id+'/assessor </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;">  <td style="padding:0;Margin:0px;border-bottom:1px solid #EEEEEE;background:none;height:1px;width:100%;margin:0px;"></td>  </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:24px;color:#666666;"> <a href="mailto:info@fpomanaktool.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#333333;"></a></p></td>  </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
        sendMail(req.body.email,'Activate your CII FACE Applicant Account Now',html);     
        res.status(200).json({message:'Email Sent :',updateApplicant:updateApplicant});
    }).catch(err=>{
        res.status(500).json({
            "error":"Email all ready exist"
        })
    })
}


apiController.createPassword = function (req, res) {
        let ids = req.params.id;
        let type = req.params.type;
        if(type==='applicant'){
        // Applicant.findOne({ _id: ids })
        Applicant.aggregate([
            {$addFields:{'id':{'$toString':'$_id'}}},
            {$match:{id:ids}},
            {$lookup:{
                  from: 'users',
                  localField: 'email',
                  foreignField: 'email',
                  as: 'UserData'
            }},
               
            
            ])
        .then(result=>{
            res.status(200).json({
            applicanData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                "error":"Id not matched in records"
            })
    });
    }
    
    else if(type==='calibrator'){
        // Calibrator.findOne({ _id: ids })
        Calibrator.aggregate([
            {$addFields:{'id':{'$toString':'$_id'}}},
            {$match:{id:ids}},
            {$lookup:{
                  from: 'users',
                  localField: 'email',
                  foreignField: 'email',
                  as: 'UserData'
            }},
               
            
            ])
        .then(result=>{
            res.status(200).json({
                calibratorData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                "error":"Id not matched in records"
            })
    });
    }
    
    else{
        // Assessors.findOne({ _id: ids })
        Assessors.aggregate([
            {$addFields:{'id':{'$toString':'$_id'}}},
            {$match:{id:ids}},
            {$lookup:{
                  from: 'users',
                  localField: 'assessorsEmail',
                  foreignField: 'email',
                  as: 'UserData'
            }},
               
            
            ])
        .then(result=>{
            res.status(200).json({
                assessorsData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                "error":"Id not matched in records"
            })
    });
    }
}


apiController.PasswordSave = function (req, res) {      
    bcrypt.hash(req.body.password, 10).then((hash) => {
    const role=req.params.type;
    // console.log(req.params.type);
    const status=true;
     var passwordData = new Auth({
        "role":  role, 
        "userStatus":  status, 
        "email":  req.body.email,         
        "_id":  req.body.id,         
        "password":  req.body.password, 
        "mobile":  req.body.mobileNo, 
        "username":  req.body.username, 
    });
    // res.json(passwordData);
    passwordData.password = hash;
    passwordData.save((error, registeredUser) => {
        if (error) {
         res.status(500).json({
        "message":"Password all ready created"
        })
        } else {
            // res.status(200).send({token});
            
            res.status(200).json({"message":" Create Password Successfully",passwordData})
            
        }
    });
  });

}


apiController.addCalibrator = function (req, res) {

    // res.json(req.body);
    const calibratorsId= Math.floor(100000 + Math.random() * 900000);
    console.log(calibratorsId);
    const token=jwt.sign({id:0},'my_secret_key');
    var calibrator = new Calibrator({
        "token": token,
        "calibratorId": calibratorsId,
        "zone": req.body.zone,
        "batch":  req.body.batch, 
        "designation":  req.body.designation, 
        "presentCo":  req.body.presentCo, 
        "pastCo":  req.body.pastCo, 
        "fsmsCertificate":  req.body.fsmsCertificate, 
        "exposure":  req.body.exposure, 

        "title":  req.body.title, 
        "firstName":  req.body.firstName, 
        "lastName":  req.body.lastName, 
        "phone":  req.body.phone, 
        "email":  req.body.email, 
        "education":  req.body.education, 
        "year":  req.body.year, 
        "skill":  req.body.skill, 
        "domain":  req.body.domain, 

        "addressLine1":  req.body.addressLine1, 
        "addressLine2":  req.body.addressLine2, 
        "zipCode":  req.body.zipCode, 
        "country":  req.body.country, 
        "state":  req.body.state, 
        "city":  req.body.city, 

        

    });
   try{
    calibrator.save()
       res.status(200).json({"message":" Create Calibrator Successfully",calibrator})
   }
   catch{
    res.status(500).json({
        "message":"Create Calibrator is failed!"
     })
   }
}

apiController.addCalibratorWithEOI = function (req, res) {

    // res.json(req.body);
    const calibratorsId= Math.floor(100000 + Math.random() * 900000);
    console.log(calibratorsId);
    const token=jwt.sign({id:0},'my_secret_key');
    var calibrator = new Calibrator({
        "token": token,
        "invite": true,
        "calibratorId": calibratorsId,
        "zone": req.body.zone,
        "batch":  req.body.batch, 
        "designation":  req.body.designation, 
        "presentCo":  req.body.presentCo, 
        "pastCo":  req.body.pastCo, 
        "fsmsCertificate":  req.body.fsmsCertificate, 
        "exposure":  req.body.exposure, 

        "title":  req.body.title, 
        "firstName":  req.body.firstName, 
        "lastName":  req.body.lastName, 
        "phone":  req.body.phone, 
        "email":  req.body.email, 
        "education":  req.body.education, 
        "year":  req.body.year, 
        "skill":  req.body.skill, 
        "domain":  req.body.domain, 

        "addressLine1":  req.body.addressLine1, 
        "addressLine2":  req.body.addressLine2, 
        "zipCode":  req.body.zipCode, 
        "country":  req.body.country, 
        "state":  req.body.state, 
        "city":  req.body.city, 

        

    });
   try{
    calibrator.save()   
    let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;">Dear  '+req.body.firstName +' ,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;">Create Password using this link https://ciiface.evalue8.info/create-password/'+calibrator._id+'/calibrator </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;">  <td style="padding:0;Margin:0px;border-bottom:1px solid #EEEEEE;background:none;height:1px;width:100%;margin:0px;"></td>  </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:24px;color:#666666;">We are here to help. Feel free to write us at <a href="mailto:info@fpomanaktool.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#333333;">info@fpomanaktool.com</a></p></td>  </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>  <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">  <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;">  <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED;" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#EDEDED"> <tr style="border-collapse:collapse;">  <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;">  <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td align="center" class="es-m-txt-c" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:10px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:15px;color:#666666;">You are receiving this email because you have visited our site or signed up for our newsletter. Please contact us at <a target="_blank" href="mailto:info@fpomanaktool.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:10px;text-decoration:underline;color:#333333;">info@fpomanaktool.com</a> if you have any queries.</p> </td>  </tr>  <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:18px;color:#333333;">© 2021 <a target="_blank" href="http://#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:12px;text-decoration:none;color:#333333;"></a>FPO Manak Tool</p> </td> </tr>  </table> </td> </tr>  </table> </td> </tr> </table> </td> </tr> </table> </td> </tr>  </table>  </div> </body></html>'; 
    sendMail(req.body.email,'Activate your CII FACE Applicant Account Now',html);
    res.status(200).json({message:'Email Sent :',calibrator:calibrator});
   }
   catch{
    res.status(500).json({
        "message":"Create Assessors is failed!"
     })
   }
}


apiController.viewCalibrator = function (req, res) {
    Calibrator.aggregate([
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
        
        ])
    .then(result=>{
        res.status(200).json({
            calibratorData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
 
}

apiController.editCalibrator = function (req, res) {
    let ids = req.params.id;
    Calibrator.findOne({ _id: ids })
    .then(result=>{
        res.status(200).json({
            calibratorData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}

apiController.editCalibratorsAdmin = function (req, res) {
    let ids = req.params.id;
    // Applicant.findOne({ _id: ids })
    Calibrator.aggregate([
        {$addFields:{'id':{'$toString':'$_id'}}},
        {$match:{id:ids}},
        {$lookup:{
              from: 'users',
              localField: 'email',
              foreignField: 'email',
              as: 'UserData'
        }},
           
        
        ])
    .then(result=>{
        res.status(200).json({
            calibratorData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}

apiController.updateCalibrator = function (req, res) {
    let ids = req.params.id;
    var today = new Date();
    req.body.updated_at=today;
    Calibrator.findByIdAndUpdate({_id : ids},{$set:req.body}).then(updateApplicant=>{
        res.status(200).json({"message":" Update Calibrator Successfully",updateApplicant})
    }).catch(err=>{
        res.status(500).json({
            "error":"Calibrator Update is failed"
        })
    })
}


apiController.updateCalibratorWithEOI = function (req, res) {
    let ids = req.params.id;
    let status = true;
    var today = new Date();
    req.body.updated_at=today;
    req.body.invite=status;
    Calibrator.findByIdAndUpdate({_id : ids},{$set:req.body}).then(updateApplicant=>{
         res.status(200).json({message:'Email Sent :',updateApplicant:updateApplicant});
    }).catch(err=>{
        res.status(500).json({
            "error":"Calibrator Update is failed"
        })
    })
}

apiController.addQuestionnaire = function (req, res) {

    // res.json(req.body);
    var questionnaire = new QuestionnaireModel({
        "questionnaireName": req.body.questionnaireName,
        "discriptions":  req.body.discriptions, 

    });
   try{
    questionnaire.save()
       res.status(200).json({"message":" Add Questionnaire Successfully",questionnaire})
   }
   catch{
    res.status(500).json({
        "message":"Add Questionnaire is failed!"
     })
   }
}

apiController.viewQuestionnaire = function (req, res) {
    QuestionnaireModel.find()
    .then(result=>{
        res.status(200).json({
            QuestionnaireData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
 
}

apiController.addSectionId = function (req, res) {
    let ids = req.params.id;
    QuestionnaireModel.findOne({ _id: ids })
    .then(result=>{
        res.status(200).json({
            questionnaireData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
});
}

apiController.addSection = function (req, res) {


    var Section = new SectionModel({
        "questionnaireId": req.body.questionnaireId,
        "sectionNo":  req.body.sectionNo, 
        "sectionName":  req.body.sectionName, 
        "sectionDescription":  req.body.sectionDescription, 
        "isSubSection":  req.body.isSubSection, 
        

    });
   try{
    Section.save()
       res.status(200).json({"message":" Create Section Successfully",Section})
   }
   catch{
    res.status(500).json({
        "message":"Create Section is failed!"
     })
   }
}

apiController.addQuestion = function (req, res) {


    var Question = new QuestionModel({
        "questionnaireId": req.body.questionnaireId,
        "sectionId":  req.body.sectionId, 
        "subSectionId":  req.body.subSectionId, 
        "questionNo":  req.body.questionNo, 
        "question":  req.body.question, 
        "answer": req.body.answer,
        "remark": req.body.remark,
        "addHint": req.body.addHint,
        "required": req.body.required,
        

    });
   try{
    Question.save()
       res.status(200).json({"message":" Create Question Successfully",Question})
   }
   catch{
    res.status(500).json({
        "message":"Create Question is failed!"
     })
   }
}

apiController.addSubSection = function (req, res) {


    var SubSection = new SubSectionModel({
        "questionnaireId": req.body.questionnaireId,
        "sectionId":  req.body.sectionId, 
        "subSectionNo":  req.body.subSectionNo, 
        "subSectionName": req.body.subSectionName,
        "subSectionDescription": req.body.subSectionDescription,
        

    });
   try{
    SubSection.save()
       res.status(200).json({"message":" Create SubSection Successfully",SubSection})
   }
   catch{
    res.status(500).json({
        "message":"Create SubSection is failed!"
     })
   }
}

apiController.viewAllSection = function (req, res) {
    SectionModel.find()
    .then(result=>{
        res.status(200).json({
            SectionData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
 
}

function getSubSection (req, res) {
    SectionModel.aggregate([
        {$addFields:{'sid':{$toString:'$_id'}}},
        { $lookup: { from: 'subsections', localField: 'sid', foreignField: 'sectionId', as: 'Data' } },
        {$match:{sid:req.body.id}},
    ]).then(result=>{
        res.status(200).json({result});
    });
}


apiController.getSectionWithId = function (req, res) {
    let ids = req.params.id;
     SectionModel.aggregate([
        {$addFields:{'sid':{$toString:'$_id'}}},
        { $lookup: { from: 'subsections', localField: 'sid', foreignField: 'sectionId', as: 'subSectionData' }} ,
        {$lookup:{ from: 'questions', localField: 'sid', foreignField: 'sectionId', as: 'questionData'  }},
      
        {$match:{sid:req.body.id}},
    ]).then(result=>{
        res.status(200).json({result});
       
    });
}

apiController.applicantDelete = async function (req, res) {
    let ids = req.params.id;

    Applicant.findOneAndRemove({_id:ids}).then(result=>{
        res.status(200).json({
            "success":"Record delete Successfully!"
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            "error":"Id not matched in records"
        })
    });
}

apiController.applicantReSendEOI = function (req, res) {
    let ids = req.params.id;
    let status = true;
    var today = new Date();
    Applicant.findByIdAndUpdate({_id : ids},{$set:{invite:status,updated_at:today}}).then(updateApplicant=>{
        let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  ' +updateApplicant.firstName+' ,</b></span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>We are pleased to inform you that <b>'+updateApplicant.unitName+'</b> has been nominated for the CII Award for Food Safety.</p><br/><p> We request you to kindly accept this invite for nomination and complete your Letter of Intent for CII Award for Food Safety.</p> <p>To activate this account, Please click the following link: </p> <a href="https://ciiface.evalue8.info/create-password/'+updateApplicant._id+'/applicant" style="padding:5px;background:blue;color:white;text-decoration:none;"> Activate Account </a></span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;">  </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>  </td> </tr> </table> </td> </tr>  </table>  </div> </body></html>'; 
        sendMail(req.body.email,"Activate your CII FACE Applicant Account Now",html);
        res.status(200).json({message:'Email Sent :',updateApplicant:updateApplicant});
        
    }).catch(err=>{
        res.status(500).json({
            "error":"Resend EOI is failed"
        })
  
});
}

apiController.assessorReSendEOI = function (req, res) {
    let ids = req.params.id;
    let status=true;
    var today = new Date();
    Assessors.findByIdAndUpdate({_id : ids},{$set:{invite:status,updated_at:today}}).then(updateApplicant=>{
        console.log(updateApplicant);
        let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  ' +updateApplicant.firstName+'</b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>You are receiving this message because you have created your account with CII FACE Assessment System. (Not familiar with CII - FACE? Learn more at <a href="www.face-cii.in">www.face-cii.in</a>)</p><p> To activate your CII Face Account, please click the button below:</p> <a href="https://award.face-cii.in/create-password/'+updateApplicant._id+'/assessor" style="padding:5px;background:blue;color:white;text-decoration:none;"> Activate Account </a><p>If the link does not work, please copy the following link into your browser address bar: https://award.face-cii.in/create-password/'+updateApplicant._id+'/assessor<br/> </p><p>If you do not wish to continue with your application, please disregard this request.</p>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;"></p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
        sendMail(updateApplicant.assessorsEmail,"Activate your CII FACE Assessor Account Now",html)
        res.status(200).json({message:'Email Sent :',updateApplicant:updateApplicant});
        
    }).catch(err=>{
        res.status(500).json({
            "error":"Resend EOI is failed"
        })
  
});
}

apiController.calibratorReSendEOI = function (req, res) {
    let ids = req.params.id;
    let status = true;
    var today = new Date();
    Calibrator.findByIdAndUpdate({_id : ids},{$set:{invite:status,updated_at:today}}).then(updateApplicant=>{
        res.status(200).json({message:'Email Sent :',updateApplicant:updateApplicant});
    }).catch(err=>{
        res.status(500).json({
            "error":"Resend EOI is failed"
        })
  
});
}


apiController.signUp = function (req, res) {
    const applicantId= Math.floor(100000 + Math.random() * 900000);
    const status=true;
    const role='applicant';
    const token=jwt.sign({id:0},'my_secret_key');

    Auth.findOne({$or: [{email: (req.body.email).toLowerCase() }]}).then(user => {
        if (user) {
            let errors = {};
            if (user.email === (req.body.email).toLowerCase()) {
                return res.status(200).json({message:'Email already exists',statuscode:201});
            }  
        } 
        else {
            bcrypt.hash(req.body.password, 10).then((hash) => {
            var User = new Auth({
                "token": token,
                "status": status,
                "role": req.body.type,
                "username": req.body.username,
                "email":  (req.body.email).toLowerCase(), 
                "mobile":  req.body.mobile, 
                "password":  req.body.password, 
            });
            User.password = hash;
            User.save(function (err, result) {
                if (err) {
                    console.log(err,">>>>>>>>>>>>>>>>>>>>")
                }
                else
                {
                    
                    if(result.role=='applicant')
                    {
                        var applicant = new Applicant({
                            "_id":result._id,
                            "token": token,        
                            "applicantId": applicantId,
                            "firstName": result.username,
                            "email":  result.email, 
                            "mobileNo":  result.mobile, 
                        });
                        applicant.save(function (err, result1) {
                            if (err) {
                                console.log(err)
                            }
                            else{
                                console.log(result1)
                                 let   html= '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  '+req.body.username+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>You are receiving this message because you have created your account with CII FACE Assessment System. (Not familiar with CII - FACE? Learn more at <a href="www.face-cii.in">www.face-cii.in</a>)</p><p>Please find your login credentials below:</p><p>Username: <b>'+req.body.email+'</b></p><p>Password: <b>'+req.body.password+'</b></p><br/><p> To activate your CII Face Account, please click the button below:</p> <a href="https://award.face-cii.in/activate-user/'+result1._id+' " style="padding:5px;background:blue;color:white;text-decoration:none;"> Activate Account </a><p>If the link does not work, please copy the following link into your browser address bar: https://award.face-cii.in/activate-user/'+result1._id+'<br/> </p><p>If you do not wish to continue with your application, please disregard this request.</p>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;"></p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
                                sendMail(result1.email,"CII Food Safety Award 2022",html)
                                res.status(200).json({message:'Email Sent :',statuscode:200,User:result,applicant:result1});
                            }
                        });
                    }
                    else
                    {
                        console.log(result.email,"<<<<<<<<<<<<Assessor>>>>>>>>>>>>>>")
                        let asse = new Assessors();
                        asse._id=result._id;
                        asse.firstName=result.username;
                        asse.assessorsEmail=result.email;
                        asse.assessorsPhone=result.mobile;
                        asse.invite=true;
                        asse.save(function (err, result2) {
                            if (err) {
                                console.log(err,"Assessor")
                            }else{
                                console.log(result2)
                                let   html= '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  '+req.body.username+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>You are receiving this message because you have created your account with CII FACE Assessment System. (Not familiar with CII - FACE? Learn more at <a href="www.face-cii.in">www.face-cii.in</a>)</p><p> To activate your CII Face Account, please click the button below:</p> <a href="https://award.face-cii.in/activate-user/'+result._id+' " style="padding:5px;background:blue;color:white;text-decoration:none;"> Activate Account </a><p>If the link does not work, please copy the following link into your browser address bar: https://award.face-cii.in/activate-user/'+result._id+'<br/> </p><p>If you do not wish to continue with your application, please disregard this request.</p>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;"></p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
                                sendMail(result2.assessorsEmail,"CII Food Safety Award 2022",html)
                                res.status(200).json({message:'Email Sent :',statuscode:200,User:result,applicant:result2});
                                                               
                            }
                        });
                    }

                       
                }
            });
        });
        }
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });

 
}



apiController.accountActive = function (req, res) {
    const date = new Date();
    let ids = req.params.id;
    let status = true;
    req.body.status=status;
    let datestring=date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0') ;
    let timestring=date.getHours().toString().padStart(2, '0') + ':' +date.getMinutes().toString().padStart(2, '0') + ':' +date.getSeconds().toString().padStart(2, '0');
    Auth.findByIdAndUpdate(ids, {$set:req.body}).then(updateApplicant=>{
        let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear CII FACE Team,   </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"> <p>We are pleased to inform you that '+updateApplicant.username+'  has accepted the invite and successfully activated the account.</p>  </span> <p>Date of Invite Acceptance: '+datestring+' </p><p>Time of Invite Acceptance: '+timestring+' </p> <p>IP Address: '+req.connection.remoteAddress+'</p><br/><p>Note: Please do not revert to this email.</p></td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
        sendMail('tarun.gupta@cii.in',"New "+(updateApplicant.role).toUpperCase()+" | CII FACE",html);           
        res.status(200).json({"message":" Update Applicant Successfully"})

    }).catch(err=>{
        res.status(500).json({
            "error":"Applicant Update is failed"
        })
    })
}

apiController.accountActiveDetails = function (req, res) {
    let ids = req.params.id;
    Auth.find({_id : ids}).then(updateApplicant=>{
        res.status(200).json({updateApplicant})
    }).catch(err=>{
        res.status(500).json({
            "error":"No user found"
        })
    })
}

apiController.ChangePassword = function (req, res) {
     Auth.findOne({_id:req.params.id}).exec((e,results)=>{
    if(!results){
       return res.json({message:"User Not Found!",status:404})
    }else{
  
        console.log(req.body);
      let hash=results._doc.password;
      if(bcrypt.compareSync(req.body.old_pass, hash)){

          if(req.body.new_pass==req.body.c_pass){
             if(req.body.new_pass==req.body.old_pass){
                return res.json({message:"New Password cannot be same as Current password! ",status:401})
            }
              else{
                let pass={password:hashPassword(req.body.new_pass)}
                Auth.findOneAndUpdate({_id:req.params.id},{$set:pass}).exec((err,ChangeRes)=>{
                  return res.json({ChangeRes,message:'Password Changed',status:200})
  
              })
              }
            
        }
        
        else{
            return res.json({message:"New Password & Confirm Password are not  matching",status:401})
        }  
       
      }
      else{
          return res.json({message:"Old Password is not matching",status:401})
      }
           
    }
        
   })
}

apiController .resetPassword = function (req,res){
   Auth.findOne({email:req.body.email}).exec((e,results)=>{
       
        if(!results){
            return res.status(200).json({message:'User not found!',statuscode:201});
        }else{
            let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  '+results.username+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"> <p>We have received the request to reset your password of ' +results.email+ '   for CII FACE Assessment Portal and have created the reset password link. </p><a href="https://award.face-cii.in/reset-password/'+results._id+'" style="padding:5px;background:blue;color:white;text-decoration:none;">  Reset Password </a>  </span> <p>Please click the above button to reset your password. If you have not requested to reset the password, please ignore this email.</p><p>You can paste this code below in your internet browser address bar if the above button is not working</p> <a href="https://ciiface.evalue8.info/reset-password/'+results._id+'">https://award.face-cii.in/reset-password/'+results._id+'</a></td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
            sendMail(req.body.email,"Reset Password CII FACE",html)
            return res.status(200).json({message:'Send mail successfully!',statuscode:200});
            
               
        }
     
       })
}

apiController .resetPasswordSave = function (req,res){
    Auth.findOne({_id:req.params.id}).exec((e,results)=>{
       
              if(req.body.new_pass==req.body.c_pass){
                  let pass={password:hashPassword(req.body.new_pass),status:true}
                  Auth.findOneAndUpdate({_id:req.params.id},{$set:pass}).exec((err,ChangeRes)=>{
                    return res.json({ChangeRes,message:'Password Changed',statusCode:200})
    
                })
            }
            else{
                return res.status(200).json({message:"New & Confirm Password Not Matched",status:401})
            }  
        })
}

apiController.sendActivationEmail = function (req,res){
    Auth.findOne({_id:req.params.id}).exec((e,results)=>{
                  let pass={password:hashPassword('12345678'),status:true}
                  console.log(results,pass)
                  Auth.findOneAndUpdate({_id:results.id},{$set:pass}).exec((err,ChangeRes)=>{
                   let   html= '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  '+results.username+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>You are receiving this message because you have created your account with CII FACE Assessment System. (Not familiar with CII - FACE? Learn more at <a href="www.face-cii.in">www.face-cii.in</a>)</p><p>Please find your login credentials below:</p><p>Username: <b>'+results.email+'</b></p><p>Password: <b>12345678</b></p><br/><p> Please click on this link to login to your CII FACE Account:</p> <a href="https://award.face-cii.in/login" style="padding:5px;background:blue;color:white;text-decoration:none;"> Login </a><p>If the link does not work, please copy the following link into your browser address bar: https://award.face-cii.in/login<br/> </p>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;"></p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
                    sendMail(results.email,"Congratulations! Your CII FACE Account has been activated.",html)
                    return res.json({ChangeRes,message:'Activated your CII FACE Applicant Account',statusCode:200})
                })
           
        })
}


apiController.coapplicantsave = function(req,res){
    console.log(req.body);
    let coapp=new CoApplicant(req.body);
    coapp.save();
    return res.json({message:'co-applicant save',statusCode:200})
}

apiController.coapplicantlist = function(req,res){
    console.log(req.params.id)
    let query=[{ $addFields:{'appid':{$toString:'$applicantId'}}},
        { $match:{'appid':req.params.id}}]
    CoApplicant.aggregate(query).exec((err, result)=>{
        return res.json({result,statusCode:200})
    })
}


apiController.bulkmail = async function (req, res) {
   Assessors.find({invite:true},{_id:1}).exec(async function(err,assdata){
        let i=1;
        const promises = assdata.map(item =>
          new Promise(resolve =>
            setTimeout(() => {
                    let status=true;
                    var today = new Date();
                     Assessors.findByIdAndUpdate({_id : item._id},{$set:{invite:status,updated_at:today}})
                    .then(updateApplicant=>{
                        console.log(updateApplicant._id+">>>>>>>>>>>>>"+i)
                        i++;
                        resolve()
                    })
            }, 10000)
          )
        )
        Promise.all(promises).then(() => console.log('done'))
    })   
}

apiController.getByIdCoApplicant=function(req, res){
    CoApplicant.find({_id : req.params.id}).exec((err,coapplicantRecord)=>{
        return res.json({coapplicantRecord,statusCode:200})
    })
}

apiController.updateByIdCoApplicant=function(req, res){
    CoApplicant.findByIdAndUpdate({_id : req.params.id},{$set:req.body}).then(coapplicantRecord=>{
         return res.json({coapplicantRecord,statusCode:200})
    })
}

apiController.addQuestion=function(req, res){
    console.log(req.body)
    QuesModel.insertMany(req.body).then(Ques=>{
         return res.json({Ques,statusCode:200})
    })
}

apiController.viewQuestion=function(req, res){
    QuesModel.find().exec((err,Ques)=>{
         return res.json({Ques,statusCode:200})
    })
}

apiController.viewQuestionSec=function(req, res){
    QuesModel.find(req.body).sort({section_no:-1}).distinct('section_no', function(error, sec) {
        if(error) console.log(error)
         return res.json({sec,statusCode:200})
    });
}

apiController.viewQuestionByCriteria=function(req, res){
    QuesModel.find(req.body).exec(function(error, sec) {
        if(error) console.log(error)
         return res.json({sec,statusCode:200})
    });
}

apiController.insertInstruction=function(req, res){
    InstructionModel.find({criteria:req.body.criteria}).exec((errr,record)=>{
        if(record.length==0){
            let ins=new InstructionModel(req.body);
            ins.save(function (err, Inst) {
              if (err) return console.error(err);
              return res.json({Inst,statusCode:200})
            });
        }
        else{
            InstructionModel.findByIdAndUpdate({_id:record[0]._id},{$set:{description:req.body.description}}).then(result=>{
                return res.json({result,statusCode:201})
            })
        }
    })
    
}

apiController.viewInstructionByCriteria=function(req, res){
    InstructionModel.find(req.body).exec((err,Inst)=>{
         return res.json({Inst,statusCode:200})
    })
}

apiController.viewInstruction=function(req, res){
    InstructionModel.find().exec((err,Inst)=>{
         return res.json({Inst,statusCode:200})
    })
}

apiController.addAssessment=function(req, res){
    assessment_model.find({ criteria: req.body.criteria,section_no: req.body.section_no,type: req.body.type,email:req.body.email}).exec((err,ass)=>{
         if(ass.length!=0){
            assessment_model.deleteOne({ criteria: req.body.criteria,section_no: req.body.section_no,type: req.body.type,email:req.body.email}).exec()
            if(req.body.type=='assessor'){
                Score_model.deleteOne({assessment_id: ass[0]._id}).exec();
            }
            
         }
         let asst=new assessment_model(req.body);
         asst.save(function (err, assessment) {
              if (err) return console.error(err);
              return res.json({assessment,statusCode:200})
            });

    })
}

apiController.ViewAssessment=function(req, res){
    assessment_model.find({ criteria: req.body.criteria,section_no: req.body.section_no,type: req.body.type,email:req.body.email}).exec((err,ass)=>{
         return res.json({ass,statusCode:200})
    })
}

apiController.addUserInstruction=function(req, res){
    let asst=new Userinst_model(req.body);
     asst.save(function (err, assessment) {
          if (err) return console.error(err);
          return res.json({assessment,statusCode:200})
        });
}

apiController.ViewInst=function(req, res){
    Userinst_model.find({ criteria: req.body.criteria,type: req.body.type,email:req.body.email}).exec((err,ass)=>{
         return res.json({ass,statusCode:200})
    })
}


apiController.saveFinalAssessment=function(req, res){
    FassessmentModel.find({ criteria: req.body.criteria,type: req.body.type,email:req.body.email}).exec((err,ass)=>{
         if(ass.length!=0){
           return res.json({statuscode:202})
         }
         else{
            let asst=new FassessmentModel(req.body);
             asst.save(function (err, assessment) {
                  if (err){
                    return console.error(err);
                  } 
                  else{
                    Applicant.find({email:req.body.email}).exec(function(err,updateApplicant){
                    let html='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head> <meta charset="UTF-8">  <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>FPO Manak Tool</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;} </style> <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- -->  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]-->  <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a { padding:0; }.ExternalClass { width:100%; }.ExternalClass, .ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td, .ExternalClass div {line-height:100%; }.es-button {mso-style-priority:100!important;text-decoration:none!important; }a[x-apple-data-detectors] {color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important; }  .es-desk-hidden {  display:none; float:left;overflow:hidden; width:0;max-height:0;line-height:0;mso-hide:all; }</style> </head> <body style="width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F6F6F6;">  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">  <tr class="gmail-fix" height="0" style="border-collapse:collapse;">   <td style="padding:0;Margin:0;">  <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">  <tr style="border-collapse:collapse;">  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px;" height="0">  </td>   </tr>  </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;margin-top: 20px;border-top-left-radius: 15px;border-top-right-radius: 15px;"> <tr style="border-collapse:collapse;">  <td align="left" esdev-eq="true" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color: #ffffff;border-radius: 15px 15px 0px 0px;"> <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">  <tr style="border-collapse:collapse;">  <td width="270" class="" align="center" valign="top" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <img src="https://ciiface.evalue8.info/assets/img/cii%20face%20logo%20.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; width: 150px;"></td>  </tr>  </table> </td> </tr>  </table><table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> <tr style="border-collapse:collapse;"><td width="270" align="left" style="padding:0;Margin:0;">  <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"> <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:white" >&nbsp;</p> </td> </tr>  </table> </td> </tr></table> <!--[if mso]></td></tr></table><![endif]--></td>  </tr> </table> </td></tr>   </table>  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">  <tr style="border-collapse:collapse;">  <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tr style="border-collapse:collapse;">  <td style="Margin:0;padding-top:25px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-repeat:no-repeat;background-position:left top;background-color:transparent;" align="left" bgcolor="transparent"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="margin:0px;line-height:22px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:100;color:#333333;"><b>Dear  ' +updateApplicant[0].firstName+' </b>,</span></td> </tr>  <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;"> <span style="Margin:0;line-height:32px;mso-line-height-rule:exactly;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#333333;"><strong></strong></span></td>  </tr>  </table> </td> </tr> </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;">  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <span style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;line-height:24px;color:#333333;"><p>Thank you for submitting the checklist questionnaire.</p><p>Your responses are under review and CII FACE Awards Team shall assign an Assessment Team Lead to you soon.</p> <p>You shall be notified once your Assessment Team Lead is assigned.</p>  </span> </td>  </tr>  </table> </td>  </tr>  </table> </td>  </tr> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="560" valign="top" align="center" style="padding:0;Margin:0;">  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"><td align="left" class="es-m-txt-c" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:21px;color:#666666;">Have queries with this mail?</p></td> </tr>  </table> </td>   </tr>  </table> </td> </tr>  </table> </td>  </tr>  </table>   </td> </tr>  </table>  </div> </body></html>';
                    sendMail(req.body.email,"CII Food Safety Award 2022",html)
                    return res.json({assessment,statuscode:200})
                    })
                    
                  }
                  
                });
         }
         

    })
}

apiController.viewFinalAssessment=function(req, res){
    FassessmentModel.find({ criteria: req.body.criteria,type: req.body.type,email:req.body.email}).exec((err,ass)=>{
         return res.json({ass,statusCode:200})
    })
}

///-------------- Allocation----------------------///

apiController.viewApplicantLOISubmitted=function(req, res){
    Applicant.find({ userStatus: true,sector:{$ne:null}}).exec((err,ass)=>{
         return res.json({ass,statusCode:200})
    })
}

apiController.viewAssessorAsPerSector=function(req, res){
    // Assessors.find({ "domain.item_text": req.body.sector,organizationName:{$ne:req.body.applicant_name}}).exec((err,ass)=>{
    Assessors.find().exec((err,ass)=>{
         return res.json({ass,statusCode:200})
    })
}

apiController.saveallocation=async function(req, res){
    let emails="";
    let all=new Allocation_model();
    all.applicant_id=req.body.applicant_id;
    all.period_from=req.body.period_from;
    all.period_to=req.body.period_to;
    all.remarks=req.body.remarks;
    all.save(async function(err,result){
        let html1="";
        
        (req.body.assessment_list).map(async(item)=>{
            let all_list=new Allocationlist_model();
            all_list.allocation_id=result._id;
            all_list.assessor_id=item._id;
            all_list.period_from=req.body.period_from;
            all_list.period_to=req.body.period_to;
            all_list.section=item.section
            all_list.teamleader=item.teamleader;
            all_list.calibrator=item.calibrator;
            all_list.save()
            let assessorData= await Assessors.find({_id:item._id}).exec();
            // console.log(assessorData)
            html1+='<tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color:#666666;"> '+((item.teamleader && item.calibrator)?'Senior Assessor & Calibrator':(item.teamleader?"Senior Assessor":(item.calibrator?"Calibrator / Assessor":"Assessor")))+' </td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+assessorData[0].firstName+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+assessorData[0].designation+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+assessorData[0].Organization+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+assessorData[0].assessorsPhone+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;" ><a href="javascript:void(0)" style="color: #87a63f;">'+assessorData[0].assessorsEmail+'</a></td> </tr>';
            emails+=assessorData[0].assessorsEmail+','+assessorData[0].assessorsSecondaryemail+',';
                      
        })
    let applicantData= await Applicant.find({_id:req.body.applicant_id}).exec();
    // emails+=applicantData[0].email;
    console.log(html1);
    
    let html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>CII Award for Food Safety 2022</title><style type="text/css"> @media only screen and (max-width:1000px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:1000px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } } #outlook a {     padding:0; } .ExternalClass {     width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {     line-height:100%; } .es-button {     mso-style-priority:100!important;     text-decoration:none!important; } a[x-apple-data-detectors] {     color:inherit!important;     text-decoration:none!important;     font-size:inherit!important;     font-family:arial, helvetica neue, helvetica, sans-serif;     font-weight:inherit!important;     line-height:inherit!important; } .es-desk-hidden {     display:none;     float:left;     overflow:hidden;     width:0;     max-height:0;     line-height:0;     mso-hide:all; } </style>   </head>   <body style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">    <div class="es-wrapper-color" style="background-color:#F6F6F6;"> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">       <tr class="gmail-fix" height="0" style="border-collapse:collapse;">        <td style="padding:0;Margin:0;">         <table width="1000" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">           <tr style="border-collapse:collapse;">            <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:1000px;" height="0"> <img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:1000px;width:1000px;" alt="" width="1000" height="1"> </td>           </tr>         </table> </td>       </tr>       <tr style="border-collapse:collapse;">        <td valign="top" style="padding:0;Margin:0;">         <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">           <tr style="border-collapse:collapse;">            <td align="center" style="padding:0;Margin:0;">             <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">               <tr style="border-collapse:collapse;">                <td align="left" style="padding:0;Margin:0;">                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                   <tr style="border-collapse:collapse;">                    <td width="1000" align="center" valign="top" style="padding:0;Margin:0;">                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                       <tr style="border-collapse:collapse;">                        <td align="center" style="padding:0;Margin:0;"> <img class="adapt-img" src="https://award.face-cii.in/assets/img/bg-3.jpg" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height: 50px;" width="1000"></td>                       </tr>                     </table> </td>                   </tr>                 </table> </td>               </tr>             </table> </td>           </tr>         </table>         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">           <tr style="border-collapse:collapse;">            <td align="center" style="padding:0;Margin:0;">             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">               <tr style="border-collapse:collapse;">                <td style="Margin:0;padding-left:25px;padding-right:25px;padding-top:40px;padding-bottom:40px;background-repeat:no-repeat;" align="left">                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                   <tr style="border-collapse:collapse;">                    <td width="550" valign="top" align="left" style="padding:0;Margin:0;">                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                      <tr style="border-collapse:collapse;">                        <td class="es-infoblock" align="left" style="padding-bottom: 20px;line-height:120%;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC;"> <img src="https://award.face-cii.in/assets/img/CII-Face.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="100"> </a> </td>                       </tr>                      <tr style="border-collapse:collapse;">                        <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif, serif;font-size:20px;font-style:normal;font-weight:normal;color:#666666;">Dear&nbsp;Senior Assessor and Assessors,</h2></td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif, serif;font-size:22px;font-style:normal;font-weight:600;color:#87a63f;">Invitation for Assessors: CII Award for Food Safety 2022</h2></td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:5px;padding-right:5px;padding-bottom:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">We are happy to offer you the assessment of the following applicant unit for the CII Award for Food Safety 2022. This prestigious Award has successfully stepped on its 13th year of execution.</p></td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:5px;padding-right:5px;padding-bottom:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">The tentative Team composition and the Applicant Company allocated to you is provided below and is also available to check the Assessor Portal:</p></td>                       </tr>                      <table style="border-collapse: collapse;                      width: 100%;">                       <tr >                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Unit Name</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Contact Person</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Criteria</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Address</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mobile No</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email:</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Product</th></tr><tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+applicantData[0].organizationName+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+applicantData[0].contactPerson+'-'+applicantData[0].contactDesignation+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+applicantData[0].criteria+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+applicantData[0].applicantAddress1+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+applicantData[0].contactMobile+'</td>  <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;"><a href="javascript:void(0)" style="color: #87a63f;">'+applicantData[0].contactEmail+'</a></td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+applicantData[0].product+'</td></tr></table><h4 style="margin: 2rem 0 .5rem 0;">Assessor Team Details:</h4>                     <table style="border-collapse: collapse;                      width: 100%;">                       <tr>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px; ">Assessors Details :</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Name</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Designation</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Organization</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mob No.</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email</th>                       </tr> '+html1+'</table>                    </table> <p style="color: #454545;"><strong>Kindly login to your Assessor Portal (<a href="https://award.face-cii.in/logins" target="_blank"style="color: #87a63f;" >https://award.face-cii.in/login</a>) for accepting or rejecting the allotted assessment.</strong></p>                   <p style="color: #454545; font-weight: 600;">Request you to urgently address the following: </p>                   <ul >                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Communicate to us your confirmation to participate in the award assessment as soon as possible. You can also mention your acceptance/rejection using CII FACE Assessor Portal <a href="javascript:void(0)" style="color: #87a63f;">(https://award.face-cii.in/login).</a></li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Check the correctness of your contact details, designation and email ids (personal and official) and inform us if amendments need to be made. (Personal and official email ids must be mentioned).</li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">  If you are an ex- employee/ present competitor/ supplier to the applicant, please inform us, since there may be a conflict of interest and we need to check that aspect with the applicant.</li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Ensure you have appropriate digital aptitude and resources to conduct virtual assessment.</li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Click on <b>‘Reply to all’</b> for responding to this mail.</li>                   </ul>                   <p style="color: #454545; font-size: 14px;">The Virtual Site Visits would need to be completed by Aug 30th, 2022, during a set of dates (4 full days Virtual assessment) mutually convenient to the Assessor team and the Applicant.</p>                   <p style="color: #454545; font-size: 14px;">Based on our experience, certain changes in the composition of the Assessment Teams become inevitable due to circumstances beyond the control of CII. In view of this, may we request you not to share the contact details of the team members with the Applicant Organization, at this stage.</p>                   <p style="color: #454545; font-size: 14px;">CII will inform the Applicant of the allocated Senior Assessor soon after receiving confirmation from him/her. Subsequently, the Senior Assessor will communicate the confirmed team members table to the Applicant Company after receiving confirmation of site visit dates from each of the members.</p>                   <p style="color: #454545; font-size: 14px;">Please note that dropout by team members, thereafter, is not desirable. We would request your compliance to the commitment you make and any changes to it would require a written intimation by the assessor’s management to CII-FACE.</p>                   <p style="color: #454545; font-size: 14px;">The Senior Assessor will be the one-point contact with the Applicant Company after the 1st Communication of CII to the applicant organization.</p>                   <p style="color: #454545; font-size: 14px;">Please find attached:</p>                   <ul>                     <li style="color: #454545; font-size: 14px;">Key steps for Virtual Site Visit</li>                     <li style="color: #454545; font-size: 14px;">Roles and Responsibilities of Senior Assessors and Assessors</li>                     <li style="color: #454545; font-size: 14px;">Virtual Site Visit Plan & Consensus Meeting: Sample Plan</li>                   </ul>                   <p style="color: #454545; font-size: 14px;">The above documents are also available under the Resources Section in your CII FACE Assessor Portal.</p>                   <p style="color: #454545; font-size: 14px;">Kindly acknowledge receipt of this mail and look forward to your confirmation at the earliest. Non receipt of confirmation within the stipulated 3 days may warrant replacement of the concerned assessor.</p>                   </td>                   </tr>                 </table> </td>               </tr>             </table> </td>           </tr>         </table>                  <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">           <tr style="border-collapse:collapse;">            <td align="center" style="padding:0;Margin:0;">             <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F0F0F0;border-top:1px solid #FF80AB;" width="1000" cellspacing="0" cellpadding="0" align="center" bgcolor="#f0f0f0">               <tr style="border-collapse:collapse;">                <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;">                                  <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">                   <tr style="border-collapse:collapse;">                    <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;">                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                       <tr style="border-collapse:collapse;">                        <td align="left" style="padding:0;Margin:0;padding-bottom:15px;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#999999;"> <img src="https://award.face-cii.in/assets/img/cii%20face%20logo%20.png" alt="Flowers logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="Flowers logo" width="120"> </a> </td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;"> <a target="_blank" href="mailto:info@fleetware.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#87a63f;">fs.award@cii.in</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">(c) 2022 CII Food Safety Awards</p></td>                       </tr>                     </table> </td>                   </tr>                 </table>                 <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                   <tr style="border-collapse:collapse;">                    <td width="360" align="left" style="padding:0;Margin:0;">                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                                            <tr style="border-collapse:collapse;">                        <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">You are receiving this email because you have registered at CII Food Safety Awards Portal as an Assessor for the year 2022.</p></td>                       </tr>                     </table> </td>                   </tr>                 </table>  </td>               </tr>             </table> </td>           </tr>         </table>        </td>       </tr>     </table>    </div>     <div class="banner-toolbar">    </div>    </body> </html>';

        // console.log(html)
        sendMailwithAttachment(emails+',support@troology.com,brijesh.yadav@troology.com',"1st Communication: CII FOOD SAFETY AWARDS 2022",html)
        return res.json({result,statusCode:200})
    })
}


apiController.send2ndcommunicationmail= async function(req,res){
    
    let html1='';
    let applicantData=req.body.wholedata.applicantData;
    let allocationlistData=req.body.wholedata.allocationlistData;
        for (const item of allocationlistData) {
            if(item.allocationliststatus!='rejected'){
                let assessorData=await Assessors.find({_id:item.assessor_id}).exec();
                html1+=('<tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color:#666666;"> '+((item.teamleader && item.calibrator)?'Senior Assessor & Calibrator':(item.teamleader?"Senior Assessor":(item.calibrator?"Calibrator / Assessor":"Assessor")))+' </td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0]?assessorData[0].firstName:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0].designation!='undefined'?assessorData[0].designation:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0].Organization!='undefined'?assessorData[0].Organization:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0]?assessorData[0].assessorsPhone:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;" ><a href="javascript:void(0)" style="color: #87a63f;">'+(assessorData[0]?assessorData[0].assessorsEmail:'')+'</a></td><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;" ></td> </tr>'); 
            }     
         }
    let html_for_first_comm=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>CII Award for Food Safety 2022</title><style type="text/css"> @media only screen and (max-width:1000px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:1000px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } } #outlook a {     padding:0; } .ExternalClass {     width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {     line-height:100%; } .es-button {     mso-style-priority:100!important;     text-decoration:none!important; } a[x-apple-data-detectors] {     color:inherit!important;     text-decoration:none!important;     font-size:inherit!important;     font-family:arial, helvetica neue, helvetica, sans-serif;     font-weight:inherit!important;     line-height:inherit!important; } .es-desk-hidden {     display:none;     float:left;     overflow:hidden;     width:0;     max-height:0;     line-height:0;     mso-hide:all; } </style>   </head>   <body style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">    <div class="es-wrapper-color" style="background-color:#F6F6F6;"> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">       <tr class="gmail-fix" height="0" style="border-collapse:collapse;">        <td style="padding:0;Margin:0;">         <table width="1000" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">           <tr style="border-collapse:collapse;">            <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:1000px;" height="0"> <img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:1000px;width:1000px;" alt="" width="1000" height="1"> </td>           </tr>         </table> </td>       </tr>       <tr style="border-collapse:collapse;">        <td valign="top" style="padding:0;Margin:0;">         <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">           <tr style="border-collapse:collapse;">            <td align="center" style="padding:0;Margin:0;">             <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">               <tr style="border-collapse:collapse;">                <td align="left" style="padding:0;Margin:0;">                 <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                   <tr style="border-collapse:collapse;">                    <td width="1000" align="center" valign="top" style="padding:0;Margin:0;">                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                       <tr style="border-collapse:collapse;">                        <td align="center" style="padding:0;Margin:0;"> <img class="adapt-img" src="https://award.face-cii.in/assets/img/bg-3.jpg" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height: 50px;" width="1000"></td>                       </tr>                     </table> </td>                   </tr>                 </table> </td>               </tr>             </table> </td>           </tr>         </table>         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">           <tr style="border-collapse:collapse;">            <td align="center" style="padding:0;Margin:0;">             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">               <tr style="border-collapse:collapse;">                <td style="Margin:0;padding-left:25px;padding-right:25px;padding-top:40px;padding-bottom:40px;background-repeat:no-repeat;" align="left">                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                   <tr style="border-collapse:collapse;">                    <td width="550" valign="top" align="left" style="padding:0;Margin:0;">                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                      <tr style="border-collapse:collapse;">                        <td class="es-infoblock" align="left" style="padding-bottom: 20px;line-height:120%;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC;"> <img src="https://award.face-cii.in/assets/img/CII-Face.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="100"> </a> </td>                       </tr>                      <tr style="border-collapse:collapse;">                        <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif, serif;font-size:20px;font-style:normal;font-weight:normal;color:#666666;">Dear&nbsp;Senior Assessor and Assessors,</h2></td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif, serif;font-size:22px;font-style:normal;font-weight:600;color:#87a63f;">Invitation for Assessors: CII Award for Food Safety 2022</h2></td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:5px;padding-right:5px;padding-bottom:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">We are happy to offer you the assessment of the following applicant unit for the CII Award for Food Safety 2022. This prestigious Award has successfully stepped on its 13th year of execution.</p></td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:5px;padding-right:5px;padding-bottom:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">The tentative Team composition and the Applicant Company allocated to you is provided below and is also available to check the Assessor Portal:</p></td>                       </tr>                      <table style="border-collapse: collapse;                      width: 100%;">                       <tr >                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Unit Name</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Contact Person</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Criteria</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Address</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mobile No</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email:</th><th style="background-color: #87a63f;color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Product</th></tr> <tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].organizationName}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactPerson}-${applicantData[0].contactDesignation}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].criteria}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].applicantAddress1}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactMobile}</td>  <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;"><a href="javascript:void(0)" style="color: #87a63f;">${applicantData[0].contactEmail}</a></td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].product}</td></tr></table><h4 style="margin: 2rem 0 .5rem 0;">Assessor Team Details:</h4>                     <table style="border-collapse: collapse;                      width: 100%;">                       <tr>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px; ">Assessors Details :</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Name</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Designation</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Organization</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mob No.</th>                         <th style="background-color: #87a63f;                         color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email</th>                       </tr>`;
        html_for_first_comm+=html1;
        html_for_first_comm+=`</table>                    </table> <p style="color: #454545;"><strong>Kindly login to your Assessor Portal (<a href="https://award.face-cii.in/logins" target="_blank"style="color: #87a63f;" >https://award.face-cii.in/login</a>) for accepting or rejecting the allotted assessment.</strong></p>                   <p style="color: #454545; font-weight: 600;">Request you to urgently address the following: </p>                   <ul >                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Communicate to us your confirmation to participate in the award assessment as soon as possible. You can also mention your acceptance/rejection using CII FACE Assessor Portal <a href="javascript:void(0)" style="color: #87a63f;">(https://award.face-cii.in/login).</a></li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Check the correctness of your contact details, designation and email ids (personal and official) and inform us if amendments need to be made. (Personal and official email ids must be mentioned).</li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">  If you are an ex- employee/ present competitor/ supplier to the applicant, please inform us, since there may be a conflict of interest and we need to check that aspect with the applicant.</li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Ensure you have appropriate digital aptitude and resources to conduct virtual assessment.</li>                     <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;">Click on <b>‘Reply to all’</b> for responding to this mail.</li>                   </ul>                   <p style="color: #454545; font-size: 14px;">The Virtual Site Visits would need to be completed by Aug 30th, 2022, during a set of dates (4 full days Virtual assessment) mutually convenient to the Assessor team and the Applicant.</p>                   <p style="color: #454545; font-size: 14px;">Based on our experience, certain changes in the composition of the Assessment Teams become inevitable due to circumstances beyond the control of CII. In view of this, may we request you not to share the contact details of the team members with the Applicant Organization, at this stage.</p>                   <p style="color: #454545; font-size: 14px;">CII will inform the Applicant of the allocated Senior Assessor soon after receiving confirmation from him/her. Subsequently, the Senior Assessor will communicate the confirmed team members table to the Applicant Company after receiving confirmation of site visit dates from each of the members.</p>                   <p style="color: #454545; font-size: 14px;">Please note that dropout by team members, thereafter, is not desirable. We would request your compliance to the commitment you make and any changes to it would require a written intimation by the assessor’s management to CII-FACE.</p>                   <p style="color: #454545; font-size: 14px;">The Senior Assessor will be the one-point contact with the Applicant Company after the 1st Communication of CII to the applicant organization.</p>                   <p style="color: #454545; font-size: 14px;">Please find attached:</p>                   <ul>                     <li style="color: #454545; font-size: 14px;">Key steps for Virtual Site Visit</li>                     <li style="color: #454545; font-size: 14px;">Roles and Responsibilities of Senior Assessors and Assessors</li>                     <li style="color: #454545; font-size: 14px;">Virtual Site Visit Plan & Consensus Meeting: Sample Plan</li>                   </ul>                   <p style="color: #454545; font-size: 14px;">The above documents are also available under the Resources Section in your CII FACE Assessor Portal.</p>                   <p style="color: #454545; font-size: 14px;">Kindly acknowledge receipt of this mail and look forward to your confirmation at the earliest. Non receipt of confirmation within the stipulated 3 days may warrant replacement of the concerned assessor.</p>                   </td>                   </tr>                 </table> </td>               </tr>             </table> </td>           </tr>         </table>                  <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">           <tr style="border-collapse:collapse;">            <td align="center" style="padding:0;Margin:0;">             <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F0F0F0;border-top:1px solid #FF80AB;" width="1000" cellspacing="0" cellpadding="0" align="center" bgcolor="#f0f0f0">               <tr style="border-collapse:collapse;">                <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;">                                  <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;">                   <tr style="border-collapse:collapse;">                    <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;">                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                       <tr style="border-collapse:collapse;">                        <td align="left" style="padding:0;Margin:0;padding-bottom:15px;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#999999;"> <img src="https://award.face-cii.in/assets/img/cii%20face%20logo%20.png" alt="Flowers logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="Flowers logo" width="120"> </a> </td>                       </tr>                       <tr style="border-collapse:collapse;">                        <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;"> <a target="_blank" href="mailto:info@fleetware.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#87a63f;">fs.award@cii.in</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">(c) 2022 CII Food Safety Awards</p></td>                       </tr>                     </table> </td>                   </tr>                 </table>                 <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                   <tr style="border-collapse:collapse;">                    <td width="360" align="left" style="padding:0;Margin:0;">                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                                            <tr style="border-collapse:collapse;">                        <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">You are receiving this email because you have registered at CII Food Safety Awards Portal as an Assessor for the year 2022.</p></td>                       </tr>                     </table> </td>                   </tr>                 </table>  </td>               </tr>             </table> </td>           </tr>         </table>        </td>       </tr>     </table>    </div>     <div class="banner-toolbar">    </div>    </body> </html>`;





    let html_for_second_comm=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> <head> <meta charset="UTF-8"> <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta content="telephone=no" name="format-detection"> <title>CII Award for Food Safety 2022</title> <style type="text/css"> @media only screen and (max-width:1000px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:1000px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } } #outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height:100%; } .es-button { mso-style-priority:100!important; text-decoration:none!important; } a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:arial, helvetica neue, helvetica, sans-serif; font-weight:inherit!important; line-height:inherit!important; } .es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all; } </style> </head> <body style="width:100%;font-family:arial, helvetica neue, helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> <div class="es-wrapper-color" style="background-color:#F6F6F6;"> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> <tr class="gmail-fix" height="0" style="border-collapse:collapse;"> <td style="padding:0;Margin:0;"> <table width="1000" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:1000px;" height="0"> <img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:1000px;width:1000px;" alt="" width="1000" height="1"> </td> </tr> </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="1000" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <img class="adapt-img" src="https://award.face-cii.in/assets/img/bg-3.jpg" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height: 50px;" width="1000"></td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:25px;padding-right:25px;padding-top:40px;padding-bottom:40px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="550" valign="top" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td class="es-infoblock" align="left" style="padding-bottom: 20px;line-height:120%;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC;"> <img src="images/CII-Face.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="100"> </a> </td> </tr> <tr style="border-collapse:collapse;"> <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"> <h3 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif, serif;font-size:17px;font-style:normal;font-weight:600;color:#ef0a0a;">2nd Communication: CII Award for Food Safety 2022</h3></td> </tr> <tr style="border-collapse:collapse;"> <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif, serif;font-size:20px;font-style:normal;font-weight:normal;color:#666666;">Dear Senior Assessor and Assessors,</h2></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">Please find below the updated/applicable Team composition for the Applicant Company concerned. </p></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0px;padding-right:5px;padding-bottom:30px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:120%;color:#666666;">This Team Table supersedes the Team Composition mentioned in our earlier Communication to you. </p></td> </tr> <table style="border-collapse: collapse; width: 100%;"> <tr > <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Unit Name</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Contact Person</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Criteria</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Address</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mobile No</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email:</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Product</th> </tr> <tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].organizationName}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactPerson}-${applicantData[0].contactDesignation}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].criteria}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].applicantAddress1}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactMobile}</td>  <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;"><a href="javascript:void(0)" style="color: #87a63f;">${applicantData[0].contactEmail}</a></td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].product}</td></tr> </table> <h4 style="margin: 2rem 0 .5rem 0;">Assessor Team Details:</h4> <table style="border-collapse: collapse; width: 100%;"> <tr> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px; ">Assessor's Details:</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Name</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Designation</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Organization</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mob No.</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Site Visit Dates</th> </tr>`;
        
        html_for_second_comm+=html1;
        html_for_second_comm+=`</table> </table> <p style="font-size: 16px; font-family: arial, helvetica neue, helvetica, sans-serif; line-height: 120%; color: #666666;">We have informed the Applicant company about the Senior Assessor confirmation, keeping the Senior Assessor copied in the mail. However, the information on team members will be communicated to the Applicant by the Senior Assessor only after the site visit dates are agreed between the Senior Assessor and the Applicant. </p> <p style="color: #454545; font-weight: 600;">Senior Assessors are thus kindly requested to :</p> <ul > <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Quickly firm up the virtual site visit dates (which should be within September 10th 2022) in discussion with the team members and applicant and keep us informed.</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">In the process certain team members may also have to be replaced as dates may not be suitable to some</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">If there is an issue in finalizing site visit dates, let us know. We will revise the team members for you</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Forward to the applicant, this team composition, only after discussing and finalising site visit dates within the team and applicant.</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Under certain circumstances, the Senior assessor /Calibrator could reshuffle team members with his/her other teams, based on suitability of team members as well, provided there is no conflict of interest with the revised applicant.</li> </ul> <p style="color: #454545; font-weight: 600;">Please find attached:</p> <ul > <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Confidentiality Oath (to be signed and returned to the undersigned)</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Feedback forms (to be sent by each of you to the undersigned after completing the assessment)</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Important Communication Points to Applicant by Senior Assessor, before Virtual Site visit</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">Sample letter from Senior Assessor to Applicant</li> </ul> <p style="color: #454545; font-size: 14px;">Revised Team Composition: 2nd Communication</p> <p style="color: #454545; font-size: 14px;">Kindly acknowledge receipt of this 2nd communication.</p> <p style="color: #454545; font-size: 14px;">The Application Document, Assessment format and Opening Meeting ppt will be accessible on the portal as soon as site visits dates are fixed.</p> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F0F0F0;border-top:1px solid #FF80AB;" width="1000" cellspacing="0" cellpadding="0" align="center" bgcolor="#f0f0f0"> <tr style="border-collapse:collapse;"> <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;"> <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> <tr style="border-collapse:collapse;"> <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-bottom:15px;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#999999;"> <img src="https://award.face-cii.in/assets/img/cii%20face%20logo%20.png" alt="Flowers logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="Flowers logo" width="120"> </a> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;"> <a target="_blank" href="mailto:info@fleetware.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, helvetica neue, helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#87a63f;">fs.award@cii.in</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">(c) 2022 CII Food Safety Awards</p></td> </tr> </table> </td> </tr> </table> <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="360" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, helvetica neue, helvetica, sans-serif;line-height:150%;color:#999999;">You are receiving this email because you have registered at CII Food Safety Awards Portal as an Assessor for the year 2022.</p></td> </tr> </table> </td> </tr> </table>  </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </div> <div class="banner-toolbar"> </div> </body> </html>`;

        let html_for_third_comm=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html style="width:100%;font-family:arial;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> <head> <meta charset="UTF-8"> <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta content="telephone=no" name="format-detection"> <title>CII Award for Food Safety 2022</title> <style type="text/css"> @media only screen and (max-width:1000px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:1000px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } } #outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height:100%; } .es-button { mso-style-priority:100!important; text-decoration:none!important; } a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:arial; font-weight:inherit!important; line-height:inherit!important; } .es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all; } </style> </head> <body style="width:100%;font-family:arial;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> <div class="es-wrapper-color" style="background-color:#F6F6F6;"> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> <tr class="gmail-fix" height="0" style="border-collapse:collapse;"> <td style="padding:0;Margin:0;"> <table width="1000" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:1000px;" height="0"> <img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:1000px;width:1000px;" alt="" width="1000" height="1"> </td> </tr> </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="1000" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <img class="adapt-img" src="https://award.face-cii.in/assets/img/bg-3.jpg" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height: 50px;" width="1000"></td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:25px;padding-right:25px;padding-top:40px;padding-bottom:40px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="550" valign="top" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td class="es-infoblock" align="left" style="padding-bottom: 20px;line-height:120%;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial;font-size:12px;text-decoration:underline;color:#CCCCCC;"> <img src="https://award.face-cii.in/assets/img/CII-Face.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="100"> </a> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">Dear Senior Assessor and Calibrator: Please find the 3rd communication along with the attachment </p></td> </tr> <tr style="border-collapse:collapse;"> <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:10px;"> <h3 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial;font-size:17px;font-style:normal;font-weight:600;color:#ef0a0a;">3rd Communication to Senior Assessor </h3></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">Please share these attached documents and this mail with your team members only after they have confirmed site visit dates </p></td> </tr> <tr style="border-collapse:collapse;"> <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:10px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial;font-size:20px;font-style:normal;font-weight:normal;color:#666666;">Dear Senior Assessor/Calibrator,</h2></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;"> Hope you have finalised / in the process of finalising the Site Visit Dates with the Applicant unit/s allocated to you </p></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="color: #454545; font-weight: 600;">Attached are the following documents:</p> <ul > <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;"> The Assessment checklist would be available on the portal itself. Senior Assessor would submit this checklist filled up through consensus meeting, to CII FACE within 7 days of completion of Site Visit on the web portal itself: Please check compatibility with your system before you depart for Site. <ul> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> The least count of scoring is 5. Consensus scores for each sub-section should be in multiples of 5. </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Please do not score zero or 100 for any section </li> </ul> </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">  Please remind the Applicant to fill in their key strengths and provide the relevant attachments for evaluation (Data trends sheet, Improvement project, Sector specific Table etc)</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">  Opening Meeting Power Point Presentation (For Senior Assessors to customise and present in 20 minutes maximum during Opening Meeting ). Please also add detailed site visit plan to the existing Site Visit Slide provided in the power point presentation and modify sequence as you feel comfortable.</li> </ul> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;"> Hope you have finalised / in the process of finalising the Site Visit Dates with the Applicant unit/s allocated to you </p></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">For your reference, Your Assessment Teambox is as follows: </p></td> </tr> <table style="border-collapse: collapse; width: 100%;"> <tr > <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Unit Name</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Contact Person</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Criteria</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Address</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mobile No</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email:</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Product</th> </tr><tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].organizationName}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactPerson}-${applicantData[0].contactDesignation}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].criteria}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].applicantAddress1}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactMobile}</td>  <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;"><a href="javascript:void(0)" style="color: #87a63f;">${applicantData[0].contactEmail}</a></td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].product}</td></tr> </table> <h4 style="margin: 2rem 0 .5rem 0;">Assessor Team Details:</h4> <table style="border-collapse: collapse; width: 100%;"> <tr> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px; ">Assessor's Details:</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Name</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Designation</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Organization</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mob No.</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Site Visit Dates</th> </tr>`;
        html_for_third_comm+=html1;
        html_for_third_comm+=`</table> </table> <p style="font-size: 16px; font-family: arial; line-height: 120%; color: #666666;">I would once again like to thank you & your organisation for contributing to the prestigious CII Award for Food Safety 2022.</p> <p style="font-size: 16px; font-family: arial; line-height: 120%; color: #666666;">Do write to me/ call should you require any further clarification on the technical aspects of the site visit. For queries on logging into virtual Teams, Ms Anju Bist may be approached. For problem with attachments and links pls contact Tarun.gupta@cii.in</p> <p style="font-size: 16px; font-family: arial; line-height: 120%; color: #666666;">Wishing you all a very pleasant and meaningful virtual site visit.</p> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F0F0F0;border-top:1px solid #FF80AB;" width="1000" cellspacing="0" cellpadding="0" align="center" bgcolor="#f0f0f0"> <tr style="border-collapse:collapse;"> <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;"> <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> <tr style="border-collapse:collapse;"> <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-bottom:15px;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial;font-size:12px;text-decoration:underline;color:#999999;"> <img src="https://award.face-cii.in/assets/img/CII-Face.png" alt="Flowers logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="Flowers logo" width="120"> </a> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial;line-height:150%;color:#999999;"> <a target="_blank" href="mailto:info@fleetware.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial;font-size:12px;text-decoration:underline;color:#87a63f;">fs.award@cii.in</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial;line-height:150%;color:#999999;">(c) 2022 CII Food Safety Awards</p></td> </tr> </table> </td> </tr> </table> <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="360" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial;line-height:150%;color:#999999;">You are receiving this email because you have registered at CII Food Safety Awards Portal as an Assessor for the year 2022.</p></td> </tr> </table> </td> </tr> </table>  </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </div> <div class="banner-toolbar"> </div> </body> </html>`;
    // console.log((req.body.emails).toString());
    
    if(req.body.emails1.length!=0){
        await sendMailwithAttachment((req.body.emails1).toString(),"1st Communication: CII Award for Food Safety 2022",html_for_first_comm)
    }
    if(req.body.emails2.length!=0){
        await sendMailwithAttachment_comm2((req.body.emails2).toString(),"2nd Communication: CII Award for Food Safety 2022",html_for_second_comm)
    }
    if(req.body.emails3.length!=0){
        await sendMailwithAttachment_comm3((req.body.emails3).toString(),"3rd Communication: CII Award for Food Safety 2022",html_for_third_comm)
    }
    return res.json({result:"Mail Send Successfully",statusCode:200})
}


apiController.updateAllocation=  function(req, res){
    Allocationlist_model.deleteMany({allocation_id: req.body.allocation_id}).exec(async function(err,ress){
        let dt=new Date();
        await Allocation_model.findByIdAndUpdate({_id:req.body.allocation_id},{$set:{updated_at:dt}}).exec();
         await (req.body.assessment_list).map(async(item)=>{
            let all_list=new Allocationlist_model();
            all_list.allocation_id=req.body.allocation_id;
            all_list.assessor_id=item._id;
            all_list.period_from=req.body.period_from;
            all_list.period_to=req.body.period_to;
            all_list.section=item.section
            all_list.teamleader=item.teamleader;
            all_list.calibrator=item.calibrator;
            all_list.allocationliststatus=item.allocationliststatus;
            all_list.first_comm=item.first_comm;
            all_list.second_comm=item.second_comm;
            all_list.third_comm=item.third_comm;
            all_list.save()           
        })
         return res.json({message:"Updated",statusCode:200})
    });
  
}



apiController.list_allocation = function (req, res) {
       Allocation_model.aggregate([
        // {$addFields:{'sid':{$toObjectId:'$applicant_id'}}},
        {$lookup: { from: 'applicants', localField: 'applicant_id', foreignField: '_id', as: 'applicantData' }},
        {$lookup: { from: 'allocationlists', localField: '_id', foreignField: 'allocation_id', as: 'allocationlistData' }},
        {$lookup: { from: 'assessors', localField: 'allocationlistData.assessor_id', foreignField: '_id', as: 'assessorData' }},
        { $sort: { updated_at:-1}}
            ]).then(result=>{
                res.status(200).json({result});
        });

    }

apiController.list_allocation_by_assessor = function (req, res) {
      Allocationlist_model.aggregate([
        {$lookup: { from: 'allocations', localField: 'allocation_id', foreignField: '_id', as: 'allocationData' }},
        {$lookup: { from: 'applicants', localField: 'allocationData.applicant_id', foreignField: '_id', as: 'applicantData' }},
        {$addFields:{'assessor_id_s':{$toString:'$assessor_id'}}},
        {$match:  {'assessor_id_s':req.params.id}},
            ]).then(result=>{
                res.status(200).json({result});
        }).catch(err=>{
            console.log(err);
        });


    }

apiController.list_allocation_by_assessor_one = function (req, res) {
      Allocationlist_model.aggregate([
        {$lookup: { from: 'allocations', localField: 'allocation_id', foreignField: '_id', as: 'allocationData' }},
        {$lookup: { from: 'assessors', localField: 'assessor_id', foreignField: '_id', as: 'assessorData' }},
        {$lookup: { from: 'applicants', localField: 'allocationData.applicant_id', foreignField: '_id', as: 'applicantData' }},
        {$addFields:{'allocation_id_s':{$toString:'$allocation_id'}}},
        {$match:  {'allocation_id_s':req.params.id}},
            ]).then(result=>{
                res.status(200).json({result});
        }).catch(err=>{
            console.log(err);
        });


    }

apiController.checkAllocation = function (req, res) {
        Allocation_model.find({applicant_id:req.params.id}).then(result=>{
                res.status(200).json({result});
        }).catch(err=>{
            console.log(err);
        });

    }

apiController.dashboardAdmin = async function (req, res) {
    let ass_count=await Assessors.find().count();
    let coapp_count=await CoApplicant.find().count();
    let classificationData=await Applicant.aggregate([
            {
                $group:{
                    _id:{classification:"$classification"},
                    count:{$sum:1},
                }
            }
        ]).exec();
    let app_sector=await Applicant.aggregate([
            {
                $group:{
                _id:{sector:"$sector"},
                scount:{$sum:1},
                "Micro": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Micro"]},
                              1, 
                              0]
                    }
                 },
                "Small": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Small"]},
                              1, 
                              0]
                    }
                 },
                 "Medium": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Medium"]},
                              1, 
                              0]
                    }
                 },
                "Large": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Large"]},
                              1, 
                              0]
                    }
                 },
                },

            },
            
            { "$sort": { "scount": -1 } },
            ]).exec();
    console.log(app_sector);
     let app_state=await Applicant.aggregate([
            {
                $group:{
                _id:{applicantState:"$applicantState"},
                count:{$sum:1},
                "Micro": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Micro"]},
                              1, 
                              0]
                    }
                 },
                "Small": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Small"]},
                              1, 
                              0]
                    }
                 },
                 "Medium": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Medium"]},
                              1, 
                              0]
                    }
                 },
                "Large": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Large"]},
                              1, 
                              0]
                    }
                 },
                } 
            },
            { "$sort": { "count": -1 } },
            ]).exec();
     let app_criteria=await Applicant.aggregate([
            {
                $group:{
                _id:{criteria:"$criteria"},
                count:{$sum:1},
                "Micro": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Micro"]},
                              1, 
                              0]
                    }
                 },
                "Small": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Small"]},
                              1, 
                              0]
                    }
                 },
                 "Medium": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Medium"]},
                              1, 
                              0]
                    }
                 },
                "Large": {
                    "$sum": {
                        "$cond": [
                             {"$eq": ["$classification", "Large"]},
                              1, 
                              0]
                    }
                 },
                } 
            },
            { "$sort": { "count": -1 } },
            ]).exec();
    res.status(200).json({ass_count:ass_count,coapp_count:coapp_count,app_sector:app_sector,app_state:app_state,app_criteria:app_criteria,classificationData:classificationData});

}


apiController.updateStatusAllocationByAssessor = async function (req, res) {
    Allocationlist_model.findByIdAndUpdate({_id:req.params.id},{$set:{allocationliststatus:req.body.status}}).then(async(result)=>{
        if(req.body.tl && req.body.status=='accepted'){
               let assessorData=await Assessors.find({_id:result.assessor_id}).exec();
               console.log(assessorData)
                html1='<tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color:#666666;"> '+((result.teamleader && result.calibrator)?'Senior Assessor & Calibrator':(result.teamleader?"Senior Assessor":(result.calibrator?"Calibrator / Assessor":"Assessor")))+' </td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0]?assessorData[0].firstName:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0].designation!='undefined'?assessorData[0].designation:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0].Organization!='undefined'?assessorData[0].Organization:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">'+(assessorData[0]?assessorData[0].assessorsPhone:'')+'</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;" ><a href="javascript:void(0)" style="color: #87a63f;">'+(assessorData[0]?assessorData[0].assessorsEmail:'')+'</a></td><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;" ></td> </tr>'; 
                // console.log(html1)
                let alled=await Allocation_model.find({_id:result.allocation_id}).exec();
                // console.log(alled)
                let applicantData=await Applicant.find({_id:alled[0].applicant_id}).exec();
                console.log(applicantData)
                let html=`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html style="width:100%;font-family:arial;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> <head> <meta charset="UTF-8"> <meta content="width=device-width, initial-scale=1" name="viewport"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta content="telephone=no" name="format-detection"> <title>CII Award for Food Safety 2022</title> <style type="text/css"> @media only screen and (max-width:1000px) {p, ul li, ol li, a { font-size:16px!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h1 a { font-size:28px!important } h2 a { font-size:24px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:1000px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } } #outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height:100%; } .es-button { mso-style-priority:100!important; text-decoration:none!important; } a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:arial; font-weight:inherit!important; line-height:inherit!important; } .es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all; } </style> </head> <body style="width:100%;font-family:arial;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> <div class="es-wrapper-color" style="background-color:#F6F6F6;"> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> <tr class="gmail-fix" height="0" style="border-collapse:collapse;"> <td style="padding:0;Margin:0;"> <table width="1000" cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:1000px;" height="0"> <img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:1000px;width:1000px;" alt="" width="1000" height="1"> </td> </tr> </table> </td> </tr> <tr style="border-collapse:collapse;"> <td valign="top" style="padding:0;Margin:0;"> <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="1000" align="center" valign="top" style="padding:0;Margin:0;"> <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <img class="adapt-img" src="https://award.face-cii.in/assets/img/bg-3.jpg" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; height: 50px;" width="1000"></td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="1000" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tr style="border-collapse:collapse;"> <td style="Margin:0;padding-left:25px;padding-right:25px;padding-top:40px;padding-bottom:10px;background-repeat:no-repeat;" align="left"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="550" valign="top" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td class="es-infoblock" align="left" style="padding-bottom: 20px;line-height:120%;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial;font-size:12px;text-decoration:underline;color:#CCCCCC;"> <img src="https://award.face-cii.in/assets/img/CII-Face.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="100"> </a> </td> </tr> <tr style="border-collapse:collapse;"> <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:10px;"> <h3 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial;font-size:17px;font-style:normal;font-weight:600;color:#ef0a0a;">1st Communication to Applicant on Confirmation of Virtual Site Visit and Senior Assessor Contact Details</h3></td> </tr> <tr style="border-collapse:collapse;"> <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:10px;"> <h2 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial;font-size:20px;font-style:normal;font-weight:normal;color:#666666;">Dear Applicant,</h2></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">I am pleased to inform you that based on your Letter of Intent for the CII Award for Food Safety, a Virtual Assessment for your unit has been recommended.  A team of 3-4 Assessors will make a Virtual Site Visit to assess and verify the facts presented by you in the Application Document. Based on their findings, the Assessors will submit a report to the Calibration & Review Team followed by the Awards Committee and finally to the Jury if shortlisted. </p></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">I am communicating this decision of the Virtual Site Visit to the members of the Assessment Team assigned to your unit's Application and advising them to go ahead with the Virtual Site Visit. </p></td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:0;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">The Senior Assessor of the team (contact details provided below) would be in touch with you soon to decide on the dates of the assessment. As suggested by Award Jury, applicant unit is to confirm or provide assessment dates within +/- 7 days (14 days window) of the dates suggested by senior assessor. </p></td> </tr> <table style="border-collapse: collapse; width: 100%;"> <tr > <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Unit Name</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Contact Person</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Criteria</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Address</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mobile No</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email:</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Product</th> </tr><tr><td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].organizationName}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactPerson}-${applicantData[0].contactDesignation}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].criteria}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].applicantAddress1}</td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].contactMobile}</td>  <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;"><a href="javascript:void(0)" style="color: #87a63f;">${applicantData[0].contactEmail}</a></td> <td style="font-size: 14px; padding: 7px; border: 1px solid #ddd; color: #666666;">${applicantData[0].product}</td></tr></table><h4 style="margin: 2rem 0 .5rem 0;">Assessor Team Details:</h4> <table style="border-collapse: collapse; width: 100%;"> <tr> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px; ">Assessor's Details:</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Name</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Designation</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Organization</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Mob No.</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Email</th> <th style="background-color: #87a63f; color: white; text-align: left; padding: 15px; font-weight: 400; font-size: 15px;">Site Visit Dates</th> </tr>`;
                html+=html1;
                html+=`</table> </table> <p style="font-size: 16px; font-family: arial; line-height: 120%; color: #666666;">The Site Visit needs to be carried out within Sep 10th, 2022 during a set of dates (4 full days of virtual assessment, convenient to the Assessor team. Since many of the assessors are involved in multiple assessments, we request you to kindly accommodate the site visit dates at the earliest convenience.</p> <p style="font-size: 16px; font-family: arial; line-height: 120%; color: #666666;">Please pay your Application Fee and Site Visit fees to CII in favour of “Confederation of Indian Industry” payable at New Delhi (non-refundable) before the assessment. The details of Criteria of Assessment and Site Visit fee payable was mentioned in our earlier communication to you.  Please ignore this point if you have already made the payments.</p> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:27px;padding-right:5px;padding-bottom:10px;"> <p style="color: #454545; font-weight: 600;">May I request you to arrange the following :</p> <ul > <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">It is a good practice to assign guides/observers with the Assessment Team as they go round the various checkpoints virtually. These representatives must be equipped with a camera device enabled with good internet connectivity (Mobile phone/ iPad/ Tablets with camera).</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">The Site Visit starts with an Assessor team meeting followed by an Opening Meeting, where the Assessment Team and Management Team of Applicant Organisation get introduced to each other. This will be done online only.</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">A 30-45 minutes slot is given to the Applicant to make a formal presentation to the members of the team.  The presentation can be made during the Opening Meeting itself.  You may like to include the following points in this presentation: <ul style="margin-top: 1rem;"> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Quick appreciation of your products, processes, technologies </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Key Strengths of the Unit </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Key Milestones achieved by the unit </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Key Data Trends as mentioned in Application Document format </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Improvement projects with quantified benefits </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Sector Specific Good Practices </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Change Management Initiatives </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Award and Accolades received over past 5 years </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Sustainability Initiatives </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .2rem;list-style-type: disc;"> Any other issue, which in your opinion, the assessors need to know, in line with Assessment Criteria </li> </ul> </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;">The Site Visit includes 2 sub-stages, i.e Virtual Site Assessment and Consensus Meeting. The Site Assessment will conclude with a Closing Meeting done virtually. This will be followed by a Consensus Meeting among the assessors. The Assessment Team is not expected to give the result or summary to the Applicant during the Closing meeting.  CII will send a formal Feedback Report, providing the Strengths, Opportunities for Improvement and Score Profile, after the announcement of the results, in December 2022 during the CII Food Safety Awards Night.</li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;"> The Consensus meeting is a 1day Virtual Desktop meeting among the Assessor team members. The Consensus meeting does not require participation of the Applicant representatives at all. </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;"> You are requested NOT to offer any gifts to the Members of the Assessment Team. </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;"> Please submit the Application document cum Assessment Format checklist in the CII prescribed format on the Award web portal. (Ignore this point if you have already mailed the application document) </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;"> Soft copy each of the FSMS/ Concerned manual Manual/s should be shared in screen sharing mode to assessor at the site, as simultaneous assessment on each of these sections would be carried out by the assessors individually. Also auditee team for each of these sections must be identified by the applicant in advance. </li> <li style="color: #666666; font-size: 14px;margin-bottom: .5rem;margin-left: .8rem;list-style-type: numeric;"> You may like to note that each Assessor has signed a confidentiality pledge with CII. </li> </ul> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-left:27px;padding-right:5px;padding-bottom:10px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial;line-height:120%;color:#666666;">Looking forward to a meaningful association with your organisation through this prestigious CII Award. </p></td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> <tr style="border-collapse:collapse;"> <td align="center" style="padding:0;Margin:0;"> <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F0F0F0;border-top:1px solid #FF80AB;" width="1000" cellspacing="0" cellpadding="0" align="center" bgcolor="#f0f0f0"> <tr style="border-collapse:collapse;"> <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;"> <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> <tr style="border-collapse:collapse;"> <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;padding-bottom:15px;"> <a target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial;font-size:12px;text-decoration:underline;color:#999999;"> <img src="https://award.face-cii.in/assets/img/CII-Face.png" alt="Flowers logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="Flowers logo" width="120"> </a> </td> </tr> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial;line-height:150%;color:#999999;"> <a target="_blank" href="mailto:info@fleetware.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial;font-size:12px;text-decoration:underline;color:#87a63f;">fs.award@cii.in</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial;line-height:150%;color:#999999;">(c) 2022 CII Food Safety Awards</p></td> </tr> </table> </td> </tr> </table> <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td width="360" align="left" style="padding:0;Margin:0;"> <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> <tr style="border-collapse:collapse;"> <td align="left" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial;line-height:150%;color:#999999;">You are receiving this email because you have registered at CII Food Safety Awards Portal as an Assessor for the year 2022.</p></td> </tr> </table> </td> </tr> </table>  </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </div> <div class="banner-toolbar"> </div> </body> </html>`;
                let emails=applicantData[0].contactEmail+','+applicantData[0].contactEmail2+','+assessorData[0].assessorsEmail
                sendMailwithAttachment_comm4(emails,'1st Communication to Applicant on Confirmation of Virtual Site Visit and Senior Assessor Contact Details',html)
        }
                    return res.json({result,statusCode:201})
                })
}




apiController.updateAssessorScore = function (req, res) {
    let ids = req.params.id;
    Assessors.findByIdAndUpdate({_id : req.params.id},{$set:req.body}).then(updateApplicant=>{
        res.status(200).json({message:'Updated',updateApplicant:updateApplicant});
    }).catch(err=>{
        res.status(500).json({
            "error":"Sorry"
        })
  
});
}

apiController.updateSectionInAllocation = function (req, res) {
    let ids = req.params.id;
    if(req.body.status){
        Allocationlist_model.findByIdAndUpdate({_id : req.params.id},{$push:{section:req.body.section}}).then(updateApplicant=>{
            res.status(200).json({message:'Updated',updateApplicant:updateApplicant});
        }).catch(err=>{
            res.status(500).json({
                "error":"Sorry"
            })
        });
    }
    else{
        Allocationlist_model.findByIdAndUpdate({_id : req.params.id},{$pull:{section:req.body.section}}).then(updateApplicant=>{
            res.status(200).json({message:'Updated',updateApplicant:updateApplicant});
        }).catch(err=>{
            res.status(500).json({
                "error":"Sorry"
            })
        });
    }
    
}

apiController.updatePeriodInAllocation = function (req, res) {
    let ids = req.params.id;
        Allocation_model.findByIdAndUpdate({_id : req.params.id},{$set:req.body}).then(updateAllocation=>{
            Allocationlist_model.updateMany({allocation_id : req.params.id},{$set:req.body}).then(updateAllocationlist=>{
                res.status(200).json({message:'Updated',updateAllocationlist:updateAllocationlist,updateAllocation:updateAllocation});
            })
        }).catch(err=>{
            res.status(500).json({
                "error":"Sorry"
            })
        });
    
}

apiController.getAllocated = function (req, res) {
    Allocationlist_model.find({allocation_id : req.body.allocation_id,assessor_id:req.body.assessor_id}).exec(function(err,allocatedlist){
            res.status(200).json(allocatedlist);
    })    
}

apiController.getScore = function(req, res) {
   Score_model.find({assessment_id: req.body.assessment_id}).exec((err,ass)=>{
            if(err)
            console.log(err)
        else{
            console.log(ass)
            res.status(200).json(ass);
        }
    })
}

apiController.addScore = function(req, res) {
    Score_model.find({assessment_id: req.body.assessment_id}).exec((err,ass)=>{
         if(ass.length!=0){
            
         }
        let sco=new Score_model(req.body);
        sco.save(function(err,result){
            res.status(200).json({message:'Score Added',result});
        })
    })
}

apiController.editAllocation = async function(req, res) {
    Allocation_model.aggregate([ 
                {$addFields: {'allid':{$toString: "$_id"}}},
                {$lookup: {
                       from: "applicants",
                       localField: "applicant_id",
                       foreignField: "_id",
                       as: "applicantdata"
                     }},
                {$lookup: {
                       from: "allocationlists",
                       localField: "_id",
                       foreignField: "allocation_id",
                       as: "all"
                     }},
                {$lookup: {
                        from: "assessors",
                        localField: "all.assessor_id",
                        foreignField: "_id",
                        as: "assessordata"
                      }},
                {$match:{allid:req.params.id}},
              ]).then((result)=>{
                    res.status(200).json(result);
                })
              .catch(err=>{
                    console.log(err);
              })
}

apiController.updateMailStatus = function (req, res) {
    if(req.body.comm=='1'){
     Allocationlist_model.updateOne({allocation_id:req.body.allocation_id,assessor_id:req.body.assessor_id},{$set:{first_comm:req.body.status}}).exec();
     res.status(200).json({message:'updated'});
    }
    if(req.body.comm=='2'){
     Allocationlist_model.updateOne({allocation_id:req.body.allocation_id,assessor_id:req.body.assessor_id},{$set:{second_comm:req.body.status}}).exec();
     res.status(200).json({message:'updated'});
    }
    if(req.body.comm=='3'){
     Allocationlist_model.updateOne({allocation_id:req.body.allocation_id,assessor_id:req.body.assessor_id},{$set:{third_comm:req.body.status}}).exec();
     res.status(200).json({message:'updated'});
    }

}


apiController.saveExecutiveSummary = function(req, res) {
    let sco=new ExecutiveSummaryModel(req.body);
    sco.save(function(err,result){
        if(err){
            console.log(err)
        }
        res.status(200).json({message:'Summary Added'});
    })
}

apiController.getExecutiveSummary = function(req, res) {
    ExecutiveSummaryModel.find({allocation_id:req.params.id}).exec(function(err,result){
        if(err){
            console.log(err)
        }
        res.status(200).json(result);
    })
}


apiController.getSubSection = function(req, res) {
    QuesModel.aggregate([
        {$group: { _id: {sub_section_no:"$sub_section_no",section_no:'$section_no',sub_section_title:'$sub_section_title','criteria':'$criteria'},
            users: {
            $addToSet: "$_id"
          }
        }},
        {$match: {'_id.section_no':req.body.section_no,'_id.criteria':req.body.criteria}},
        ]).exec(function(err,result){
        if(err){
            console.log(err)
        }
        res.status(200).json(result);
    })
}

apiController.getAllocationAssessor = function(req, res) {
    Allocationlist_model.aggregate([
            {$addFields: {'all_id':{$toString: "$allocation_id"}}},
            {$match: {'all_id':req.body.allocation_id,'allocationliststatus':{$ne:'rejected'}}},
            {$lookup: {
                   from: "assessors",
                   localField: "assessor_id",
                   foreignField: "_id",
                   as: "assessor_data"
                 }
            }
        ]).exec(function(err,result){
        if(err){
            console.log(err)
        }
        res.status(200).json(result);
    })
}

apiController.getAssessment = function(req, res) {
    assessment_model.find({ "criteria": req.body.criteria,"section_no": req.body.section_no,"type": "assessor"}).exec(function(err,result){
        if(err){
            console.log(err)
        }
        res.status(200).json(result);
    })
}

apiController.getAssessmentScore = function(req, res) {
    Score_model.aggregate([
            {$addFields: {'all_id':{$toString: "$allocation_id"}}},
            {$addFields: {'app_id':{$toString: "$applicant_id"}}},
            {$addFields: {'ass_id':{$toString: "$assessment_id"}}},
            {$match:{ "all_id": req.body.allocation_id,"app_id": req.body.applicant_id,"ass_id": req.body.assessment_id}}
        ]).exec(function(err,result){
        if(err){
            console.log(err)
        }
        res.status(200).json(result);
    })
}

apiController.addConsensusScore = function(req, res) {
    ConsensusScore_model.find({allocation_id: req.body.allocation_id}).exec((err,ass)=>{
         if(ass.length!=0){
            ConsensusScore_model.deleteOne({allocation_id: req.body.allocation_id,section_no:req.body.section_no,"criteria": req.body.criteria}).exec();
         }
        let sco=new ConsensusScore_model(req.body);
        sco.save(function(err,result){
            res.status(200).json({message:'Score Added',result});
        })
    })
}

apiController.getConsensusScore = function(req, res) {
    ConsensusScore_model.find(req.body).exec((err,con_score)=>{
        if(con_score.length!=0){
            let count=0;
            for (var key in con_score[0].Conscore[0]) {
                if (con_score[0].Conscore[0].hasOwnProperty(key)) {
                    console.log(parseInt(con_score[0].Conscore[0][key]))
                   count+=parseInt(con_score[0].Conscore[0][key]);
                }
            }
            res.status(200).json({con_score:con_score,ttcon:count});
        }
        else{
         res.status(200).json([]);   
        }
    })

}

apiController.sectionGroupbyCriteria = function(req, res) {
    QuesModel.aggregate([
        {$group: { _id: {criteria:'$criteria',section_no:'$section_no'}}},
        {$match:{'_id.criteria':req.body.criteria}}
        ]).exec((err,sec)=>{
            res.status(200).json(sec);
    })

}

apiController.questionGroupbyCriteria = function(req, res) {
    QuesModel.aggregate([
         {$group: { _id: {sub_section_no:"$sub_section_no",sub_section_title:"$sub_section_title",criteria:'$criteria',section_no:'$section_no'},
            ques: {
            $addToSet: {id:"$_id",ques_no:"$question_no",ques_title:"$question_title",ques_des:"$question_description"}
          },
        }},
        {$sort:{sub_section_no:"1",sub_section_title:"1",criteria:'1',section_no:'1'}},
    {$match:{'_id.criteria':req.body.criteria,'_id.section_no':req.body.section_no}},
        ]).exec((err,sec)=>{
            res.status(200).json(sec);
    })

}


apiController.saveHighScore = function(req, res) {
    HighScore_model.find({"section_no":req.body.section_no,"criteria": req.body.criteria}).exec((err,ass)=>{
         if(ass.length!=0){
            HighScore_model.deleteOne({"section_no":req.body.section_no,"criteria": req.body.criteria}).exec();
         }
        let sco=new HighScore_model(req.body);
        sco.save(function(err,result){
            res.status(200).json({message:'Score Added',result});
        })
    })
}

apiController.getHighScore = function(req, res) {
    HighScore_model.find({"section_no":req.body.section_no,"criteria": req.body.criteria}).exec((err,result)=>{
         res.status(200).json(result);
    })
}





module.exports = apiController;