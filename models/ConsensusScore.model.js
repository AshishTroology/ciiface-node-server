const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const conScoreSchema = new mongoose.Schema({
    allocation_id: {type: Schema.Types.ObjectId},
    criteria: {type: String},
    section_no: {type: String},
    Conscore: {type: Array},
    ConscoreBy:{ type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
});

module.exports = mongoose.model("conscore", conScoreSchema);