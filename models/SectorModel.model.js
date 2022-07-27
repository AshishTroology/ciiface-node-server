const mongoose = require('mongoose');
const SectorSchema = new mongoose.Schema({
	sector	    	: { type:String},
	product			: { type:String},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('sector', SectorSchema);