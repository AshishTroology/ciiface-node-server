const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const highscoreSchema = new mongoose.Schema({
    criteria: {type: String},
    section_no: {type: String},
    score: {type: Array},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
});

module.exports = mongoose.model("highestscore", highscoreSchema);