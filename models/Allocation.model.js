const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const allocationSchema = new mongoose.Schema({
   
    applicant_id: {type: Schema.Types.ObjectId},
    period_from: {type: Date},
    period_to: {type: Date},
    remarks: {type: String},
    allocation_status: { type: String, default: "pending" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
});

module.exports = mongoose.model("allocation", allocationSchema);