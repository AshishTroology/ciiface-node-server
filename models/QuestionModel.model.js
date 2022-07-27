const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
	questionnaireId: { type:String},
	sectionId: { type:String},
	subSectionId: { type:String},
	questionNo		: { type:String},
	question	        : { type:String},
	answer	            : { type:String},
	remark	            : { type:String},
	addHint	            : { type:String},
	required	        : { type:String},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('question', QuestionSchema);