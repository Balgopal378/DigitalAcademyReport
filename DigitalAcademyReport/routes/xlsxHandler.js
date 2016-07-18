var xlsxHandler=function xlsxHandler() {

}
xlsxHandler.prototype.readFile=function () {
  var xlsx = require('xlsx');
  var wb = xlsx.readFileSync('./public/Database_Reporting_Portal_DA.xlsx',{type:'base64'});
  var result = {};
	wb.SheetNames.forEach(function(sheetName) {
		var roa = xlsx.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
		if(roa.length > 0){
			result[sheetName] = roa;
		}
	});
	return result;

}

var xls=new xlsxHandler();
var data=xls.readFile();
module.exports = data;
