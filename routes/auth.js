var express = require('express');
var router = express.Router();

const apiRouter = require('./api.routes');
const api2Router = require('./api2.routes');
//Login super & other
router.get('/', function (req, res) {
   // res.send('Welcome')
   return res.redirect('/signUp');
   // window.location.href="/signUp"
});



/*------------------------------api routing-----------------------*/
router.use('/api',apiRouter);
/*------------------------------End api routing-------------------*/

/*------------------------------api routing-----------------------*/
router.use('/api2',apiRouter);
/*------------------------------End api routing-------------------*/

module.exports = router;