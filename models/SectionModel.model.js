const mongoose = require('mongoose');
const SectionSchema = new mongoose.Schema({
	questionnaireId		: { type:String},
	// questionnaireId: { type: mongoose.Schema.Types.ObjectId},
	sectionNo			: { type:String},
	sectionName			: { type:String},
	sectionDescription	: { type:String},
	isSubSection	    : { type:String},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('section', SectionSchema);