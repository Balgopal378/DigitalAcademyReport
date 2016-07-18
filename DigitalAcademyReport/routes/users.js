var express = require('express');
var router = express.Router();
var xlsxData = require('./xlsxHandler');
var employee = require('./Employee');
var bu= require('./BuisnessUnit');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(xlsxData);
var input = xlsxData.Master_7_Jul;
  //added to get a field value
  var buNames=bu.getBUNames(input);
  var correspondBuEmp=bu.getBURespectiveEmployee(buNames,input);
  console.log(correspondBuEmp);
  res.send(correspondBuEmp);
});

module.exports = router;
