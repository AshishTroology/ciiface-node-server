var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new mongoose.Schema({
    Product           : { type: String, index: true},
    Sector        : { type: String, index: true},
 
});
module.exports = mongoose.model('products', productSchema);