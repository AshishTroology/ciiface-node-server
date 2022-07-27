
var table_data = {};

/*------------------------get data (table list) from mongo db---------------------
|	@model= model instance of table;
|	@argument = list of Parameter in array form;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array with table data;
*/
table_data.getlist = function (model, argument, view, res) {
	
	model.find({ parent_email: argument['parent_email'], parent_id: argument['parent_id']}).exec(function(err, data){
		if(err){
			console.log('Error :' + err);
			next(err);
		}
		else{
			res.render(view,{data:data});
		}
	});
}
/*------------------------get data (table list) from mongo db-----------------*/


/*------------------------get single data to edit (table list) from mongo db---------------------
|	@model= model instance of table in array or string form;
|	@argument = id of table in string form;
|	@params = query params to perform where clause;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array  with single table row;
*/
table_data.editlist = function (model, argument, view, res, master_render = false, params = null) {
	if(master_render){
		model[0].findOne({_id:argument}).exec(function(err, data){
			if(err){
				console.log('Error :' + err);
				next(err);
			}
			else{
				table_data.master_edit_render(model, data, view, res, params);
			}
		});
	}
	else{
		model.findOne({_id:argument}).exec(function(err, data){
			if(err){
				console.log('Error :' + err);
				next(err);
			}
			else{
				res.render(view,{data:data});
			}
		});
		
	}
}
/*------------------------get data (table list) from mongo db-----------------*/



/*------------------------Delte single data (table list) from mongo db---------------------
|	@model= model instance of table;
|	@argument = id of table in string form;
|	@req or request = instance of node js request to set middleware action;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array  with single table row;
*/
table_data.deletelist = function (model, argument, view, req, res ) {
	
	model.remove({_id:argument}).exec(function(err){
		if(err){
			console.log('Error :' + err);
			next(err);
		}
		else{
			req.flash('success', 'Successfully Deleted !!');
			res.redirect(view);
		}
	});
}
/*------------------------get data (table list) from mongo db-----------------*/




/*------------------------custom render---------------------
|   @model = take model instance to retrive any table data
|   @argument = argument list in array form
|   @view = View page to render
|   @req = req instance of express js
|   @res = res instance of express js
|	@return render to view page;
*/
table_data.custom_render = function (model, argument, view, req, res){
	model.find({ parent_id: argument.parent_id, parent_email: argument.parent_email, status: true }).exec(function(err, data){
		if(!err){
			res.render(view,{data:data});
		}
	});
}
/*------------------------custom render----------------*/


/*------------------------master_edit_render ---------------------
|   @model = take model instance to retrive any table data
|   @data = previous model data 
|   @view = View page to render
|   @res = res instance of express js
|	@return render to view page;
*/
table_data.master_edit_render = function(model, data, view, res, params){
	datalist = {};
	datalist.data = data;	
	model[1].find({ parent_id: params.parent_id, parent_email: params.parent_email, status: true }).exec(function(err, result){
		if(err){
			next(err);
		}
		else{
			datalist.data1 = result;
			res.render(view,{data:datalist});
		}
	});


}

/*------------------------master_edit_render ---------------------*/




/*------------------------Get current user email and id ---------------------
|   @superuser = boolean value, is user admin/owner
|   @user = user detail in array form
|   @session = session detail 
|	@return parent email and parent id;
*/
table_data.current_user = function(superuser, user, session){
	if(superuser){
		data = {
			'parent_email': user['email'],
			'parent_id'   : session.userId,
		};
		// if(user.email =='stock@b4w.co.in' || user.email =='b4wace@marutilucknow.com' || user.email =='zeeshan.a@troology.com'){
		// 	data = {
		// 	'parent_email': user['parent_email'],
		// 	'parent_id'   : user['parent_id'],
		// 	};
		// }
	}
	else{
		data = {
			'parent_email': user['parent_email'],
			'parent_id'   : user['parent_id'],
		};		
	}
	return data;
}

/*------------------------Get current user email and id ---------------------*/





/*------------------------Master Table Fetch data---------------------
|   @model = instance of model 
|	@params = query params to perform where clause;
|   @callback = callback to return data
|	@return return all table row in json;
*/
table_data.master_table_fetch_data = function(model, params, callback){
	model.find({ parent_id: params.parent_id, parent_email: params.parent_email, status: true , 's_location.object_id': params.s_location.object_id}).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}

/*------------------------Master Table Fetch data---------------------*/


/*------------------------Master Table findOne data---------------------
|   @model = instance of model 
|	@params = query params to perform where clause;
|   @callback = callback to return data
|	@return return all table row in json;
*/
table_data.master_table_find_one = function(model, params, callback){
	model.findOne({ _id: params }).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}

/*------------------------Master Table Fetch data---------------------*/




/*------------------------master_render_with_model ---------------------
|   @model = take model instance to retrive any table data
|   @argument = argument list in array form to perform where clause;
|   @view = View page to render
|   @res = res instance of express js
|   @old_data = old_data in json array to pass view page
|	@return render to view page;
*/
table_data.master_render_with_model = function (model, argument, view, res, old_data){
	model.find({ parent_id: argument.parent_id, parent_email: argument.parent_email }).exec(function(err, response){
		if(!err){
			data ={};
			data.data  = response;
			data.data1 = old_data;
			res.render(view,{data:data});
		}
	});
}
/*------------------------master_render_with_model----------------*/




/*------------------------Master Populate Table with Path---------------------
|   @model = instance of model 
|	@params = query params to perform where clause;
|   @callback = callback to return data
|	@return return all table row in json;
*/
table_data.master_populate_path = function(model, params, path, another_model, callback){
	model.find({ parent_id: params.parent_id, parent_email: params.parent_email }).
	populate({path: path, model:another_model}).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}

/*------------------------Master Populate Table with Path----------------------*/



/*------------------------Master Multiple Populate Table with Path---------------------
|   @model  = instance of model 
|	@params = query params to perform where clause;
|	@path   = path or column name to populate
|	@another_model   = model use to populate
|   @callback = callback to return data
|	@return return all table row in json;
*/
table_data.master_populate_multiple_path = function(model, params, path, another_model, callback){
	populate = [];
	for (var i = 0; i < another_model.length; i++) {
		populate.push({'path': path[i], 'model': another_model[i] })
	}
	model.find({ parent_id: params.parent_id, parent_email: params.parent_email,status: true}).sort({created_at: -1}).
	populate(populate).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}

/*------------------------Master Multiple Populate Table with Path----------------------*/



/*------------------------Master Multiple Populate Table with Match condition---------------------
|   @model  = instance of model 
|	@params = query params to perform where clause;
|	@path   = path or column name to populate in array form
|	@another_model   = model use to populate in array form
|	@match   = match  condition in arrray form like [{path: 'demo_id', model: 'demo_vehicle',match: { 'demo_id': {'$ne': ''} }}];
|   @callback = callback to return data
|	@return return all table row in json;
*/
table_data.master_populate_multiple_path_match = function(model, params, path, another_model, match, callback){
	populate = [];
	for (var i = 0; i < another_model.length; i++) {
		populate.push({'path': path[i], 'model': another_model[i] })
	}
	for (var i = 0; i < match.length; i++) {
		populate.push(match[i])
	}	
	model.find({ parent_id: params.parent_id, parent_email: params.parent_email, status: true}).sort({created_at: -1}).
	populate(populate).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}

/*------------------------Master Multiple Populate Table with Match condition-----------------------*/



/*------------------------Channge Status of single data (table list) from mongo db---------------------
|	@model= model instance of table;
|	@argument = id of table in string form;
|	@req or request = instance of node js request to set middleware action;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array  with single table row;
*/
table_data.deletelist_status= function (model, argument, view, req, res ) {
	model.findByIdAndUpdate(argument, { $set: {status: false }},function(err, data){
		req.flash('toast_success', 'Successfully Deleted !!');
		res.redirect(view);
	});
	// model.remove({_id:argument}).exec(function(err){
	// 	if(err){
	// 		console.log('Error :' + err);
	// 		next(err);
	// 	}
	// 	else{
	// 		req.flash('success', 'Successfully Deleted !!');
	// 		res.redirect(view);
	// 	}
	// });
}
/*------------------------Channge Status of data (table list) from mongo db-----------------*/





/*------------------------get data status active from mongo db---------------------
|	@model= model instance of table;
|	@argument = list of Parameter in array form;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array with table data;
*/
table_data.getlist_status = function (model, argument, callback) {	
	model.find({ parent_email: argument['parent_email'], parent_id: argument['parent_id'], status: true}).sort({created_at: -1}).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}
/*------------------------get data status active from mongo db----------------------*/

/*------------------------get data status false from mongo db---------------------
|	@model= model instance of table;
|	@argument = list of Parameter in array form;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array with table data;
*/
table_data.getlist_status_delate = function (model, argument, callback) {	
	model.find({ parent_email: argument['parent_email'], parent_id: argument['parent_id'], status: false}).sort({created_at: -1}).exec(function(err, data){
		if(!err){
			callback(err, data)
		}
	});
}
/*------------------------get data status false from mongo db----------------------*/


/*------------------------Channge Status of single data (table list) from mongo db---------------------
|	@model= model instance of table;
|	@argument = id of table in string form;
|	@req or request = instance of node js request to set middleware action;
|	@res or response = instance of node js response to render to view page;
|   @view = view path to display the page
|	@return array  with single table row;
*/
table_data.restore_status = function (model, argument, view, req, res ) {
	model.findByIdAndUpdate(argument, { $set: {status: true }},function(err, data){
		req.flash('success', 'Successfully Deleted !!');
		res.redirect(view);
	});
}
/*------------------------Channge Status of data (table list) from mongo db-----------------*/



table_data.DateTime = function () {
    return new Date(new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Calcutta'
    })).toJSON();
}



module.exports = table_data;
