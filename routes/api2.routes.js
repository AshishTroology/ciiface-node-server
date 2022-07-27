var express = require('express');
var router = express.Router();
var api = require("../controllers/Api2Controller");
const path = require('path');

router.get('/assesorCountData',function(req, res){
	api.assesorCountData(req, res);
});

module.exports = router; 