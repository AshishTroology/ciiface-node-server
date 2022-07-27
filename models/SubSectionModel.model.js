const mongoose = require('mongoose');
const SubSectionSchema = new mongoose.Schema({
	questionnaireId		: { type:String},
	sectionId	    	: { type:String},
	subSectionNo			: { type:String},
	subSectionName			: { type:String},
	subSectionDescription	: { type:String},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('subSection', SubSectionSchema);