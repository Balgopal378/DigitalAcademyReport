var xlsxData = require('./xlsxHandler');
var input = xlsxData.Master_7_Jul;
module.exports = {

   getEmployeeDetails : function (input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
    output.push(input[i][field]);
    return output;
  },

   getTotalEmployeeAttended : function (input) {
     console.log(Object.keys(input).length);
    return Object.keys(input).length;
  }
  //var output = getEmployeeId(input,'Employee ID');
  //console.log(output);
  //var output = getTotalEmployeeAttended(input);
  //console.log(output);
};
