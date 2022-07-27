const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const scoreSchema = new mongoose.Schema({
   
    assessment_id: {type: Schema.Types.ObjectId},
    allocation_id: {type: Schema.Types.ObjectId},
    applicant_id: {type: Schema.Types.ObjectId},
    assessor_id: {type: Schema.Types.ObjectId},
    criteria: {type: String},
    score: {type: Array},
    scoreBy:{ type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
});

module.exports = mongoose.model("score", scoreSchema);