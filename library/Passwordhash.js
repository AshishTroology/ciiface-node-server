var mongoose = require("mongoose");

var passwordhash = {};
const crypto = require('crypto');

/* private encryption & validation methods */

passwordhash.generateSalt = function () {
    var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
    var salt = '';
    for (var i = 0; i < 10; i++) {
        var p = Math.floor(Math.random() * set.length);
        salt += set[p];
    }
    return salt;
}

passwordhash.md5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

passwordhash.saltAndHash = function (pass, callback) {
    var salt = passwordhash.generateSalt();
    callback(salt + passwordhash.md5(pass + salt));
}

passwordhash.validatePassword = function (plainPass, hashedPass, callback) {
    var salt = hashedPass.substr(0, 10);
    var validHash = salt + passwordhash.md5(plainPass + salt);
    callback(null, hashedPass === validHash);
}

passwordhash.getObjectId = function (id) {
    return new require('mongodb').ObjectID(id);
}

passwordhash.findById = function (id, callback) {
    users.findOne({ _id: getObjectId(id) },
        function (e, res) {
            if (e) callback(e)
            else callback(null, res)
        });
}

passwordhash.findByMultipleFields = function (a, callback) {
    // this takes an array of name/val pairs to search against {fieldName : 'value'} //
    users.find({ $or: a }).toArray(
        function (e, results) {
            if (e) callback(e)
            else callback(null, results)
        });
}

module.exports = passwordhash;