const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const allocationListSchema = new mongoose.Schema({
   
    allocation_id: {type: Schema.Types.ObjectId},
    assessor_id: {type: Schema.Types.ObjectId},
    period_from: {type: Date},
    period_to: {type: Date},
    section: {type: Array},
    teamleader:{ type: Boolean, default: false },
    calibrator:{ type: Boolean, default: false },
    allocationliststatus: { type: String, default: "pending" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    first_comm:{ type: Boolean, default: false },
    second_comm:{ type: Boolean, default: false },
    third_comm:{ type: Boolean, default: false },
});

module.exports = mongoose.model("allocationlist", allocationListSchema);