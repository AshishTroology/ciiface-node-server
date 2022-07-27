const mongoose = require('mongoose');
const UserInsSchema = new mongoose.Schema({
	  criteria: { type:String},
	  instruction: { type:String},
	  type: { type:String},
	  email: { type:String},
	  created_at 			: { type: Date, default: Date.now },
	  updated_at 			: { type: Date, default: Date.now },
	  status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('UserInstruction', UserInsSchema);