var xlsxData = require('./xlsxHandler'),
    input = xlsxData.Master_7_Jul,
    _ = require('underscore');
module.exports = {
  getBUNames : function (input) {
    var buNames=[];
    for (var i=0; i < input.length ; ++i){
      buNames.push(input[i]["Initial BU"]);
    }
    return _.uniq(buNames);
  },
   getBURespectiveEmployee : function (buNames,input) {
    var correspondBuEmp = {};
    for (var bu in buNames) {
      correspondBuEmp[buNames[bu]]=0;
    }
      for(var j=0;j<buNames.length; ++j){
        for (var i=0; i < input.length ; ++i){
            if(input[i]["Initial BU"]===buNames[j]){
              correspondBuEmp[buNames[j]]+=1;
            }
      }

  }
  var buRespectiveEmp=[];
  var buNames=[];
  for (elem in correspondBuEmp){
    buNames.push(elem);
    buRespectiveEmp.push(correspondBuEmp[elem]);
  }
    return [buNames,buRespectiveEmp];
  }
};
