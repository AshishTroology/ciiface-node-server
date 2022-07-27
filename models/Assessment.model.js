const mongoose = require('mongoose');
const AssessSchema = new mongoose.Schema({
	  criteria: { type:String},
	  section_no: { type:String},
	  type: { type:String},
	  email: { type:String},
	  assessment: { type:Array},
	  created_at 			: { type: Date, default: Date.now },
	  updated_at 			: { type: Date, default: Date.now },
	  status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('assessment', AssessSchema);