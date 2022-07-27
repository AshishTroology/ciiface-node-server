var multer  = require('multer');
var storage = multer.diskStorage({
	destination: 'public/upload/',
	filename: function ( req, file, cb ) {
		cb( null, file.originalname );
	}
});
var excel_upload = {};
excel_upload.upload =function(){
	return multer( { storage: storage } ).single('file');	
}
module.exports = excel_upload;