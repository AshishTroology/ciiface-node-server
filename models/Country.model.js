const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const countrySchema = new mongoose.Schema({
    country: { type: String },
    states: { type: Array },
});

module.exports = mongoose.model('countrylist', countrySchema);