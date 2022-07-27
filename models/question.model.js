const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
	  criteria: { type:String},
	  section_no: { type:String},
	  section_title: { type:String},
	  sub_section_no: { type:String},
	  sub_section_title: { type:String},
	  type: { type:String},
	  question_no: { type:String},
	  question_title: { type:String},
	  uniqueId: { type:String},
	  question_description: { type:String},
	  created_at 			: { type: Date, default: Date.now },
	  updated_at 			: { type: Date, default: Date.now },
	  status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('allquestion', QuestionSchema);