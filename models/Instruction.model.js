const mongoose = require('mongoose');
const InstructionSchema = new mongoose.Schema({
	  criteria: { type:String},
	  description: { type:String},
	  created_at 			: { type: Date, default: Date.now },
	  updated_at 			: { type: Date, default: Date.now },
	  status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('instruction', InstructionSchema);