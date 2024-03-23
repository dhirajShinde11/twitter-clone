var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('home');
});


// router.get('/register',function(req,res){
//   res.render('Register')
// })

module.exports = router;
