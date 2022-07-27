var appSetting = {};
const EmailTemplate = require('./EmailTemplate');
appSetting.sender_email ='deepak.s@troology.com';
appSetting.subject ='Congratulation! FleetWare Account Created.';
appSetting.message = function(data){
	return EmailTemplate.account(data)
}

/*---------------------------------------------------------node mailer email--------------*/
var mailer = require("nodemailer");
// appSetting.smtpTransport = mailer.createTransport("smtps://nasir.k@troology.com:"+encodeURIComponent('8009923230') + "@smtp.gmail.com:465");


appSetting.smtpTransport = mailer.createTransport({
	service: "Gmail",
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: "no-reply@fleetware.io",
		pass: "fleetwaretroology"
	}
});


appSetting.subject_sold ='Congratulation! You have.................';
appSetting.message_sold ='Congratulation! Thankyou for buying.................';
appSetting.sold_sms_message ='Congratulation! Thankyou for buying.................';
module.exports = appSetting;