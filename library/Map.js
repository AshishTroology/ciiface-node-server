var NodeGeocoder = require('node-geocoder');

var map = {};
var options = {
	provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBMyEtTPRFyhxNAJQJpQXeWuACfyDRrcnU', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

map.config = NodeGeocoder(options);

module.exports = map;