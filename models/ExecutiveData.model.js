const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const executiveSummarySchema = new mongoose.Schema({
    allocation_id: {type: Schema.Types.ObjectId},
    conclusion:  { type: String},
    ofis:  { type: String },
    product:  { type: String},
    processes:  { type: String},
    recommendation:  { type: String},
    key_strength:  { type: String},
    scope_of_application:  { type: String },
    scr1:  { type: String, default: "0" },
    scr10:  { type: String, default: "0" },
    scr2: { type: String, default: "0" },
    scr3: { type: String, default: "0" },
    scr4:  { type: String, default: "0" },
    scr5:  { type: String, default: "0" },
    scr6:  { type: String, default: "0" },
    scr7:  { type: String, default: "0" },
    scr8:  { type: String, default: "0" },
    scr9:  { type: String, default: "0" },
    unit_licensed: { type: String, default: "no" },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
    
});

module.exports = mongoose.model("ExecutiveSumm", executiveSummarySchema);