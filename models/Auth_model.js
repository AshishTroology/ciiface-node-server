var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
    parent_id           : { type: String, index: true},
    parent_email        : { type: String, index: true},
    role                : { type: String, index: true},
    username            : String,
    company             : { type: String},
    email               : { type: String, index: true, unique: true },
    mobile              : { type: Number, index: true },
    password            : { type: String, index: true },
    forgot_password_code: { type: String, index: true,default:null},
    c_address           : { type: String},
    c_location          : { type: String},
    c_contact           : { type: String},
    city                : { type: String },
    state               : { type: String},
    country             : { type: String},
    pin_code            : { type: String},
    description         : String,
    verify              : { type:Boolean, default: false },
    s_location          : { category : {type : [], default: null}, object_id: {  type: [], default: null, index: true }},
    status              : { type:Boolean,default: true },
    userStatus              : { type:Boolean,default: false },
    created_at          : { type: Date, default: Date.now, index: true},
    updated_at          : { type: Date, default: Date.now },
});
module.exports = mongoose.model('users', userSchema);