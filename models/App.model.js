const mongoose = require('mongoose');
const AppSchema = new mongoose.Schema({
	app_name			: { type:String,index: true},
	app_version			: { type:String},
	site_name 			: { type:String},
	site_url			: String,
	site_logo			: String,
	google_api			: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('app', AppSchema);