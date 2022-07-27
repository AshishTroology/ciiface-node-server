const mongoose = require('mongoose');
const questionnaireSchema = new mongoose.Schema({
	questionnaireName	: { type:String},
	discriptions			: { type:String},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('questionnaire', questionnaireSchema);