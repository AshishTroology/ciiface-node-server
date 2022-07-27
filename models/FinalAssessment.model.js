const mongoose = require('mongoose');
const FAssessSchema = new mongoose.Schema({
	  criteria: { type:String},
	  type: { type:String},
	  email: { type:String},
	  assessmentstatus: { type:Boolean,default:true},
	  created_at 			: { type: Date, default: Date.now },
	  updated_at 			: { type: Date, default: Date.now },
	  status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('Finalassessment', FAssessSchema);