var express = require('express')
const router = express.Router();

router.get('/login',function(req,res){
    res.send('hello world')
})


module.exports = router;