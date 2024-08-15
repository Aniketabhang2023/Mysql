var express = require('express');
var router = express.Router();
var connection = require("../src/db_conn");

/* GET home page. */
router.get('/', function (req, res, next) { 
   
     if (connection.connected) {        
       res.send("success");     
      } 
});

module.exports = router;
