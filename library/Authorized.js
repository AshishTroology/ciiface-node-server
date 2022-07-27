var mongoose = require("mongoose");
var Auth = require("../models/Auth_model");
var Permission = require("../models/Permission");
var authorized = {};
const util = require('util');
authorized.checkpermission = function (user, module, callback) {
	Permission.findOne({ name: user['role'], parent_email: user['parent_email'], parent_id: user['parent_id'] })
	.exec(function (error, roles) {
		if (!error) {
			callback(error, roles);
		} else {
			callback(err, response);
		}
	});
}
/*------------------------Check the right permission for user---------------------*/
authorized.getpermission = function (user, callback) {
	
	Permission.findOne({ name: user['role'], parent_email: user['parent_email'], parent_id: user['parent_id'] })
	.exec(function (error, roles) {
		if (!error) {
			callback(error, roles);
		}
	});
}
/*------------------------End Check the right permission for user-----------------*/



/*------------------------get data (table list) from mongo db---------------------
|	@model= model instance of table;
|	@argument = list of Parameter in array form;
|	@res or response = instance of node js req and res;
|	@return array with table data;
*/
authorized.getlist = function (model, argument, res) {
	
	model.find({ parent_email: argument['parent_email'], parent_id: argument['parent_id']}).exec(function(err, data){
		if(err){
			console.log('Error :' + err);
			next(err);
		}
		else{
			res.render('../views/admin/warehouse/list',{data:data});
		}
	});
}
/*------------------------get data (table list) from mongo db-----------------*/



module.exports = authorized;

