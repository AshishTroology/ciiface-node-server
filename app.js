'use strict';
const express = require('express');
// const multer  = require('multer');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const moment = require('moment');
const flash = require('express-flash')
const expressValidator = require('express-validator')
const compression = require('compression');
const cors = require('cors');

const fileupload=require('express-fileupload');
const fs = require('file-system');



const app = express();



app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000000}
}))
app.use(flash());
app.use(expressValidator());
app.use(cors());
app.use(fileupload());


mongoose.connect("mongodb://localhost/ciiface3", (err) => {
  if (err) console.log(err);
  console.log("Database Connected!!");
});
var auth = require('./routes/auth');
var UploadFile = require('./UploadFile.js');
app.use(function(req,res,next) {
    if(req.headers["x-forwarded-proto"] == "http") {
        res.redirect("https://"+ req.headers["x-forwarded-host"]+ req.url);
    } else {
        return next(); 
    } 
});

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    if(res.locals.user){
      Permission.findOne({ name: res.locals.user.role})
          .exec(function (error, roles) {
          res.locals.permission = roles;
      }); 
    }
    res.locals.app_version = '1.0.0';
    res.locals.moment = moment;
    next();
});
app.use(express.static(__dirname+'/uploads'))

app.use('/', auth);
app.use('/upload',UploadFile)
const root = path.join(__dirname, 'dist', 'ciifaceproject');
app.get('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});





app.listen(3000,function(){
  console.log('http://13.235.172.47:3000');
});
global.appRoot = path.resolve(__dirname);
app.locals.baseUrl = path.resolve(__dirname);
// global.appUrl = 'https://award.face-cii.in';
global.appUrl = 'http://13.235.172.47:3000';
module.exports = app;
